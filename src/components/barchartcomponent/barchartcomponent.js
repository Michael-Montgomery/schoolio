import './barchartcomponent.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
    LabelList, // Import LabelList
} from "recharts";

export default function BarchartComponent({ title, fields, data, color }) {

    // console.log('fields:', fields);

    // const chartData = fields
    //     .map((field) => ({
    //         ethnicity: field,
    //         percent: Number(data[field]) || 0,
    //     }))
    //     .sort((a, b) => b.percent - a.percent);

        const chartData = fields
        .map((field) => ({
            ethnicity: field,
            percent: Number(data[field]) || 0,
        }))
        .sort((a, b) => b.percent - a.percent);

    // console.log('chartData:', chartData);


    return (
        <div className="barchart-component">
            <h2 style={{ color: color }}>{title}</h2>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart data={chartData} margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 80,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ethnicity"
                        angle={-15}
                        textAnchor="end"
                        interval={0}
                        height={120} />
                    <YAxis label={{ value: "Percent", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Bar dataKey="percent">
                        {chartData.map((entry, index) => (
                            <Cell key={index} fill={color} />
                        ))}
                        <LabelList 
                            dataKey="percent" 
                            position="top" 
                            formatter={(value) => `${value}%`} // Add % sign here
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}