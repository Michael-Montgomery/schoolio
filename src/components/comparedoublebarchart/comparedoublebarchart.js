import './comparedoublebarchart.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList, // Import LabelList
} from "recharts";

export default function CompareDoubleBarChart({ data1, data2, color1, color2 }) {

    const chartData = [
        {
            category: "Economic",
            score1: Number(data1["Economic"]),
            score2: Number(data2["Economic"]),
        },
        {
            category: "Composite",
            score1: Number(data1["Composite Score"]),
            score2: Number(data2["Composite Score"]),
        },
        {
            category: "Education",
            score1: Number(data1["Education"]),
            score2: Number(data2["Education"]),
        },
        {
            category: "Crime",
            score1: Number(data1["Crime"]),
            score2: Number(data2["Crime"]),
        },
        {
            category: "Health",
            score1: Number(data1["Health"]),
            score2: Number(data2["Health"]),
        },
        {
            category: "Housing",
            score1: Number(data1["Housing"]),
            score2: Number(data2["Housing"]),
        },
        // {
        //     category: "Gini Index",
        //     score1: Number(data1["Gini index"]),
        //     score2: Number(data2["Gini index"]),
        // },
        {
            category: "Housing Affordability",
            score1: Number(data1["Housing affordability"]),
            score2: Number(data2["Housing affordability"]),
        },
        // {
        //     category: "Housing Vacancy Rate",
        //     score1: Number(data1["Housing vacancy rate"]),
        //     score2: Number(data2["Housing vacancy rate"]),
        // },
        {
            category: "Incarceration Rate",
            score1: Number(data1["Incarceration rate"]),
            score2: Number(data2["Incarceration rate"]),
        },
        {
            category: "Infant Mortality Rate",
            score1: Number(data1["Infant mortality rate"]),
            score2: Number(data2["Infant mortality rate"]),
        },
        {
            category: "Poverty",
            score1: Number(data1["Poverty"]),
            score2: Number(data2["Poverty"]),
        },
        // {
        //     category: "Violent Crime Rate",
        //     score1: Number(data1["Violent crime rate"]),
        //     score2: Number(data2["Violent crime rate"]),
        // },
        {
            category: "Broadband Access",
            score1: Number(data1["Access to broadband internet"]),
            score2: Number(data2["Access to broadband internet"]),
        },
    ];

    return (
        <div style={{ width: "100%", height: 450 }} className='compare-double-bar-chart'>
            <h2 style={{ color: color1 }}>{`Comparison of ${data1.Name} and ${data2.Name}`}</h2>
            <ResponsiveContainer>
                <BarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis label={{ value: "Score", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score1" name={data1.Name} fill={color1}>
                        <LabelList
                            dataKey="score1"
                            position="top"
                            formatter={(value) => `${value}%`} // Add % sign here if needed
                        />
                    </Bar>
                    <Bar dataKey="score2" name={data2.Name} fill={color2}>
                        <LabelList
                            dataKey="score2"
                            position="top"
                            formatter={(value) => `${value}%`} // Add % sign here if needed
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}