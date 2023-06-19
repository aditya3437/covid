import React from "react";
import style from "./Charts.module.css";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";




// Sample chart data
const pdata = [
  {
    "cases": 690424056,
    "deaths": 6892124,
    "recovered": 662927131,	
    
    },
    {
    "cases": 6995781935,
     "deaths": 37492,
    "recovered": 1484,	
    }
    ,
    {
    "cases": 690424056,
     "deaths": 83440.22,
    "recovered": 7944935131,	
    }
    ,
    {
    "cases": 690424056,
     "deaths": 6892124,
    "recovered": 662927131,	
    }
    ,
    {
    "cases": 88575,
     "deaths": 884.2,
    "recovered":83440.22,	
    }
    ,{
    "cases": 690428756,
     "deaths": 37492,
    "recovered": 168702897,	
    },
];

const Charts = () => {
  
  return (
    <>
    
      <div className={style.container}>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={pdata} margin={{ right: 300 }}>
            <Line dataKey="cases" stroke="black" activeDot={{ r: 10}} />
            <Line dataKey="deaths" stroke="red" activeDot={{ r: 10}} />
            <Line dataKey="recovered" stroke="blue" activeDot={{ r: 10}} />
            <CartesianGrid />
            <XAxis dataKey="recovered" interval={"preserveStartEnd"} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Charts;
