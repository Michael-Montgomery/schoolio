import './compare.css';
import { useContext, useEffect, useState } from 'react';
import Papa from 'papaparse';
import DoubleBarChart from '../../components/doublebarchartcomponent/doublebarchartcomponent';
import Infotile from '../../components/infotile/infotile';
import CompareDoubleBarChart from '../../components/comparedoublebarchart/comparedoublebarchart';
import { CityContext } from '../../context/citycontext';
import Header from '../../components/header/header';

export default function Compare() {

    const { citiesToCompare } = useContext(CityContext); // Access the citiesToCompare array

    // if (citiesToCompare.length < 2) {
    //     return (
    //         <div className='compare-page'>
    //             <h1>Please select two schools to compare.</h1>
    //         </div>
    //     );
    // }

    
    const [schoolsToCompare, setSchoolsToCompare] = useState([
        {
            Name: "shool 1...",


        },
        {
            Name: "school 2...",
            'Education Percentile Rank': "Loading...",
            'Economic  Percentile Rank': "Loading...",
            'Housing Percentile Rank': "Loading...",
            'Gini index': "Loading...",
            'Housing affordability': "Loading...",
            'Housing vacancy rate': "Loading...",
            'Incarceration rate': "Loading...",
            'Infant mortality rate': "Loading...",
            'Poverty': "Loading...",
            'Violent crime rate': "Loading...",
            'Access to broadband internet': "Loading...",
            'Access to healthcare': "Loading...",
            'Linguistic isolation': "Loading...",
            'Low birth weight': "Loading...",
            'Park access': "Loading...",
            'SNAP recipients': "Loading...",
            'Single-parent households': "Loading...",
            'Lead exposure risk': "Loading...",
        }
    ]);

    useEffect(() => {
        Papa.parse(`${process.env.PUBLIC_URL}/schooldata.csv`, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                console.log(results.data);
                setSchoolsToCompare(citiesToCompare);
                console.log(results.data.slice(0, 2));
                console.log(citiesToCompare);
            },
        });

    }, []);

    const validateCompareData = (value1, value2) => {
        if (isNaN(Number(value1)) || isNaN(Number(value2))) {
            return "N/A%";
        } else {
            return `${(Number(value1) + Number(value2)) / 2}%`;
        }
    }

    return (
        <div className='compare-page'>
            <Header />
            {/* <button>Compare other schools</button> */}
            {/* <h1>Compare Schools</h1> */}
            {/* <DoubleBarChart data={schoolsToCompare[0]} color="#8884d8" />
            <DoubleBarChart data={schoolsToCompare[1]} color="#82ca9d" /> */}
            <div className='infotiles-wrapper'>
                <h2>{`Averages of ${schoolsToCompare[0].Name} and ${schoolsToCompare[1].Name}`}</h2>
                <Infotile title="Education Percentile Rank" content={`${validateCompareData(schoolsToCompare[0]['Education Percentile Rank'], schoolsToCompare[1]['Education Percentile Rank'])}`} />
                <Infotile title="Economic Percentile Rank" content={`${validateCompareData(schoolsToCompare[0]['Economic Percentile Rank'], schoolsToCompare[1]['Economic Percentile Rank'])}`} />
                <Infotile title="Housing Percentile Rank" content={`${validateCompareData(schoolsToCompare[0]['Housing Percentile Rank'], schoolsToCompare[1]['Housing Percentile Rank'])}`} />
                <Infotile title="Gini Index" content={`${validateCompareData(schoolsToCompare[0]['Gini index'], schoolsToCompare[1]['Gini index'])}`} />
                <Infotile title="Housing Affordability" content={`${validateCompareData(schoolsToCompare[0]['Housing affordability'], schoolsToCompare[1]['Housing affordability'])}`} />
                <Infotile title="Housing Vacancy Rate" content={`${validateCompareData(schoolsToCompare[0]['Housing vacancy rate'], schoolsToCompare[1]['Housing vacancy rate'])}`} />
                <Infotile title="Incarceration Rate" content={`${validateCompareData(schoolsToCompare[0]['Incarceration rate'], schoolsToCompare[1]['Incarceration rate'])}`} />
                <Infotile title="Infant Mortality Rate" content={`${validateCompareData(schoolsToCompare[0]['Infant mortality rate'], schoolsToCompare[1]['Infant mortality rate'])}`} />
                <Infotile title="Poverty" content={`${validateCompareData(schoolsToCompare[0]['Poverty'], schoolsToCompare[1]['Poverty'])}`} />
                <Infotile title="Violent Crime Rate" content={`${validateCompareData(schoolsToCompare[0]['Violent crime rate'], schoolsToCompare[1]['Violent crime rate'])}`} />
                <Infotile title="Access to Broadband Internet" content={`${validateCompareData(schoolsToCompare[0]['Access to broadband internet'], schoolsToCompare[1]['Access to broadband internet'])}`} />
                <Infotile title="Access to Healthcare" content={`${validateCompareData(schoolsToCompare[0]['Access to healthcare'], schoolsToCompare[1]['Access to healthcare'])}`} />
                <Infotile title="Linguistic Isolation" content={`${validateCompareData(schoolsToCompare[0]['Linguistic isolation'], schoolsToCompare[1]['Linguistic isolation'])}`} />
                <Infotile title="Low Birth Weight" content={`${validateCompareData(schoolsToCompare[0]['Low birth weight'], schoolsToCompare[1]['Low birth weight'])}`} />
                <Infotile title="Park Access" content={`${validateCompareData(schoolsToCompare[0]['Park access'], schoolsToCompare[1]['Park access'])}`} />
                <Infotile title="SNAP Recipients" content={`${validateCompareData(schoolsToCompare[0]['SNAP recipients'], schoolsToCompare[1]['SNAP recipients'])}`} />
                <Infotile title="Single-parent Households" content={`${validateCompareData(schoolsToCompare[0]['Single-parent households'], schoolsToCompare[1]['Single-parent households'])}`} />
                <Infotile title="Lead Exposure Risk" content={`${validateCompareData(schoolsToCompare[0]['Lead exposure risk'], schoolsToCompare[1]['Lead exposure risk'])}`} />


            </div>
            <CompareDoubleBarChart data1={schoolsToCompare[0]} data2={schoolsToCompare[1]} color1="#8884d8" color2="#82ca9d" />

            {/* <DoubleBarChart data1={schoolsToCompare[0]} data2={schoolsToCompare[1]} color1="#8884d8" color2="#82ca9d" /> */}

        </div>
    );
}