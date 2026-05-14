import './doublebarchartcomponent.css';
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
  
  export default function DoubleBarChart({ data, color }) {
  
    const chartData = [
      {
        category: "Economic",
        score: Number(data["Economic"]),
        median: Number(data["Economic Median"]),
      },
      {
        category: "Composite",
        score: Number(data["Composite Score"]),
        median: Number(data["Composite Score Median"]),
      },
      {
        category: "Education",
        score: Number(data["Education"]),
        median: Number(data["Education Median"]),
      },
      {
        category: "Crime",
        score: Number(data["Crime"]),
        median: Number(data["Crime Median"]),
      },
      {
        category: "Health",
        score: Number(data["Health"]),
        median: Number(data["Health Median"]),
      },
      {
        category: "Housing",
        score: Number(data["Housing"]),
        median: Number(data["Housing Median"]),
      },
    ];
  
    return (
      <div style={{ width: "100%", height: 450 }} className='double-bar-chart'>
        <h2 style={{color}}>Median Breakdowns</h2>
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
  
            <YAxis
              label={{
                value: "Score",
                angle: -90,
                position: "insideLeft",
              }}
            />
  
            <Tooltip />
  
            <Legend />
  
            <Bar
              dataKey="score"
              name="School Score"
              fill='#d8d8d8'
            >
              <LabelList 
                dataKey="score" 
                position="top" 
                formatter={(value) => `${value}%`} // Add % sign to the score
              />
            </Bar>
  
            <Bar
              dataKey="median"
              name="Median Score"
              fill={color}
            >
              <LabelList 
                dataKey="median" 
                position="top" 
                formatter={(value) => `${value}%`} // Add % sign to the median
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }