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
    <div className="display-graph">
      {dataList ? (
        <LineChart
          width={700}
          height={350}
          data={dataList}
          margin={{
            top: 100,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: "年度",
              offset: -10,
              position: "insideBottomRight",
            }}
          />
          <YAxis
            label={{
              value: "人口数",
              angle: 0,
              offset: -30,
              position: "insideTop",
            }}
          />
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
    </div>
  );
};

export default Graph;
