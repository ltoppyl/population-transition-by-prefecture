import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

type Props = {
  data: any[] | undefined;
};

const Graph = ({ data }: Props) => {
  return (
    <>
      {data ? (
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
        </LineChart>
      ) : (
        <p>グラフが選択されていません</p>
      )}
    </>
  );
};

export default Graph;
