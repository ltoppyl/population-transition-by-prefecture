import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "1960",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "1970",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "1980",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "1990",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "2000",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "2005",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "2010",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Graph = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      <Line type="monotone" dataKey="amt" stroke="red" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default Graph;
