import './school.css';
import { useParams } from "react-router";
import Papa from 'papaparse';
import { useEffect, useState } from 'react';

import BarchartComponent from '../../components/barchartcomponent/barchartcomponent';
import DoubleBarChart from '../../components/doublebarchartcomponent/doublebarchartcomponent';
import utilities from '../../utilities/utilities';
import Infotile from '../../components/infotile/infotile';

export default function School() {

    let { identifier, name } = useParams();
    const [school, setSchool] = useState(
        {
            Name: "Loading...",
             County: "Loading...",
             City: "Loading...",
             State: "Loading...",
             'Education Percentile Rank': "Loading...",
             'Economic Percentile Rank': "Loading...",
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
             'American Indian and Alaska Native alone': "Loading...",   
                'Asian alone': "Loading...",
                'Black or African American alone': "Loading...",
                'White alone': "Loading...",
        }
    );

    const ethnicityFields = [
        "American Indian and Alaska Native alone",
        "Asian alone",
        "Black or African American alone",
        "White alone",
        "Two or more races",
        "Some other race alone",
        "Native Hawaiian and Other Pacific Islander alone",
        "Hispanic or Latino"
    ];

    const educationFields = [
        "2-year college",
        "4-year college",
        "2-year college or higher",
        "Graduate or professional degree",
        "Less than HS",
    ];

    const chartData = ethnicityFields
        .map((field) => ({
            ethnicity: field,
            percent: Number(school[field]) || 0,
        }))
        .sort((a, b) => b.percent - a.percent);






    useEffect(() => {
        Papa.parse(`${process.env.PUBLIC_URL}/schooldata.csv`, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const school = results.data.find(s => s.NCESSCH === identifier && s.Name === name);
                console.log(school);
                setSchool(school);
            },
        });
    }, [identifier]);


    return (
        <div className="school">
            <h1>{school.Name}</h1>

            <div className='school-info'>
                {/* <h1>{school.Name}</h1> */}
                <p>{`${school.Name} is located in ${school.County} in ${school.City}, ${school.State}. ${school.Name} is in the ${school['Education Percentile Rank']}${utilities.returnPercentSuffix(school['Education Percentile Rank'])} percentile in education, ${school['Economic Percentile Rank']}${utilities.returnPercentSuffix(school['Economic Percentile Rank'])} in economy and ${school['Housing Percentile Rank']}${utilities.returnPercentSuffix(school['Housing Percentile Rank'])} in housing.`}</p>
            </div>

            {/* <div className='chart-wrapper'>
                <h3>Ethnicity Breakdown</h3>
                <div style={{ width: "100%", height: 500 }}>
                    <ResponsiveContainer>
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 120,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis
                                dataKey="ethnicity"
                                angle={-35}
                                textAnchor="end"
                                interval={0}
                            />

                            <YAxis
                                label={{
                                    value: "Percent",
                                    angle: -90,
                                    position: "insideLeft",
                                }}
                            />

                            <Tooltip />

                            <Bar dataKey="percent">
                                {chartData.map((entry, index) => (
                                    <Cell key={index} fill='#d8d8d8' />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>






            </div> */}
            <ul className='school-stats'>
                <li>
                    <Infotile title='Gini Index' content={`${school['Gini index']}%`} />
                </li>
                <li>
                    <Infotile title='Housing Affordability' content={`${school['Housing affordability']}%`} />
                </li>
                <li>
                    <Infotile title='Housing Vacancy' content={`${school['Housing vacancy rate']}%`} />
                </li>
                <li>
                    <Infotile title='Incarceration Rate' content={`${school['Incarceration rate']}%`} />
                </li>
                <li>
                    <Infotile title='Infant Mortality Rate' content={`${school['Infant mortality rate']}%`} />
                </li>
                <li>
                    <Infotile title='Poverty' content={`${school['Poverty']}%`} />
                </li>
                <li>
                    <Infotile title='Violent Crime Rate' content={`${school['Violent crime rate']}%`} />
                </li>
                <li>
                    <Infotile title='Broadband Access' content={`${school['Access to broadband internet']}%`} />
                </li>
                <li>
                    <Infotile title='Healthcare Access' content={`${school['Access to healthcare']}%`} />
                </li>
                <li>
                    <Infotile title='Linguistic Isolation' content={`${school['Linguistic isolation']}%`} />
                </li>
                <li>
                    <Infotile title='Incarceration Rate' content={`${school['Incarceration rate']}%`} />
                </li>
                <li>
                    <Infotile title='Low Birth Weight' content={`${school['Low birth weight']}%`} />
                </li>
                <li>
                    <Infotile title='Park Access' content={`${school['Park access']}%`} />
                </li>
                <li>
                    <Infotile title='SNAP Recipients' content={`${school['SNAP recipients']}%`} />
                </li>
                <li>
                    <Infotile title='Single-parent Households' content={`${school['Single-parent households']}%`} />
                </li>
                <li>
                    <Infotile title='Lead Exposure Risk' content={`${school['Lead exposure risk']}%`} />
                </li>

            </ul>
            <BarchartComponent title='Breakdown by Ethnicity' fields={ethnicityFields} data={school} color='#4B75FF'></BarchartComponent>
            <BarchartComponent title='Breakdown by Education Level' fields={educationFields} data={school} color='#B74C57'></BarchartComponent>
            <DoubleBarChart data={school} color='#AD73EE' />

        </div>
    );
}