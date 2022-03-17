import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type Props = {
  dataList: any[] | undefined;
};

const Graph = ({ dataList }: Props) => {
  const colorList = ["#00bfff", "#228b22", "#ffd700", "#ff8c00", "#da70d6"];

  const exitPrefectureNameList = [];
  if (dataList) {
    for (const key in dataList[0]) {
      if (key !== "year") {
        exitPrefectureNameList.push(key);
      }
    }
  }

  return (
    <>
      {dataList ? (
        <LineChart
          width={700}
          height={300}
          data={dataList}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          {exitPrefectureNameList.map((exitPrefectureName, index) => {
            return (
              <Line
                key={exitPrefectureName}
                type="monotone"
                dataKey={exitPrefectureName}
                stroke={colorList[index]}
              />
            );
          })}
        </LineChart>
      ) : (
        <p>グラフが選択されていません</p>
      )}
    </>
  );
};

export default Graph;
