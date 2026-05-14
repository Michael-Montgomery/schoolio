// import { useState } from 'react';
import './schools.css';
// import schoolsCSV from '../../src/schooldata.csv';
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Schools() {

    const navigate = useNavigate();


    const [schools, setSchools] = useState([]);
    const [filteredSchools, setFilteredSchools] = useState([]);
    const [displayedSchools, setDisplayedSchools] = useState([]);


    const [states, setStates] = useState([]);
    const [showCountyDropdown, setShowCountyDropdown] = useState(false);
    const [counties, setCounties] = useState([]);


    useEffect(() => {
        Papa.parse('/schooldata.csv', {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                // console.log(results.data);
                setSchools(results.data);
                setFilteredSchools(results.data);
                // console.log('done');
                setStates([...new Set(results.data.map(school => school.State))].sort());
                // setCounties([...new Set(results.data.map(school => school.County))].sort());
            },
        });
    }, []);


    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        if (selectedState) {
            setFilteredSchools(schools.filter(school => school.State === selectedState));
            setCounties([...new Set(schools.filter(school => school.State === selectedState).map(school => school.County))].sort());
            setShowCountyDropdown(true);
        } else {
            setFilteredSchools(schools);
        }
    };

    const handleCountyChange = (e) => {
        const selectedCounty = e.target.value;
        if (selectedCounty) {
            setFilteredSchools(schools.filter(school => school.County === selectedCounty));
        } else {
            setFilteredSchools(schools);
        }
    }



    return (
        <>
            <div className='controls-wrapper'>
                <select onChange={handleStateChange}>
                    <option value="default">All States</option>
                    {states.map((state) => (
                        <option key={state} value={state}>
                            {`${state} (${new Intl.NumberFormat().format(schools.filter(school => school.State === state).length)})`}
                        </option>
                    ))}
                </select>
                {showCountyDropdown && <select onChange={handleCountyChange}>
                    <option value="">Choose a County</option>
                    {counties.map((county) => (
                        <option key={county} value={county}>
                            {`${county} (${new Intl.NumberFormat().format(schools.filter(school => school.County === county).length)})`}
                        </option>
                    ))}
                </select>}
                <input type="text" placeholder="Search by name..." onChange={(e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    setFilteredSchools(schools.filter(school => school.Name.toLowerCase().includes(searchTerm)));
                }} />
            </div>
            <div className="schools">
                <h1>Schools <span className='count-span'>{new Intl.NumberFormat("en-US").format(filteredSchools.length)}</span></h1>
                {/* <p>List of schools will go here.</p> */}
                {/* <ul>
                    {filteredSchools.map((school, index) => (
                        <li key={index}>{school.Name} - {school.City}, {school.State}</li>
                    ))}
                </ul> */}
                <table>
                    <tbody>
                        {filteredSchools.map((school, index) => (
                            <tr key={index} onClick={() => navigate(`/school/${school.NCESSCH}/${school.Name}`)}>
                                <td>{school.Name}</td>
                                <td>{school.City}</td>
                                <td>{school.State}</td>
                                <td>{school.County}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}