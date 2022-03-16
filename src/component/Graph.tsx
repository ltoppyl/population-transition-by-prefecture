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

const _data = [
  {
    year: 1960,
    北海道: 50000,
    青森: 2000,
    岩手: 3000,
  },
  {
    year: 1965,
    北海道: 40000,
    青森: 20000,
    岩手: 34000,
  },
  {
    year: 1970,
    北海道: 20000,
    青森: 33000,
    岩手: 23000,
  },
  {
    year: 1975,
    北海道: 520000,
    青森: 20200,
    岩手: 3000,
  },
];

const Graph = ({ data }: Props) => {
  const exitPrefectureNameList = [];
  for (const key in _data[0]) {
    if (key !== "year") {
      exitPrefectureNameList.push(key);
    }
  }

  return (
    <>
      {_data ? (
        <LineChart
          width={500}
          height={300}
          data={_data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {exitPrefectureNameList.map((exitPrefectureName) => {
            return (
              <Line
                key={exitPrefectureName}
                type="monotone"
                dataKey={exitPrefectureName}
                stroke="#8884d8"
              />
            );
          })}
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
