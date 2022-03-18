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

import SettingUiSize from "./SettingUiSize";

type Props = {
  equipment: string;
  dataList: object[] | undefined;
};

const Graph = ({ equipment, dataList }: Props) => {
  const colorList = ["#00bfff", "#228b22", "#ffd700", "#ff8c00", "#da70d6"];
  const uiSizeForGraph = SettingUiSize(equipment);

  const exitPrefectureNameList: string[] = [];
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
          width={uiSizeForGraph.width}
          height={uiSizeForGraph.height}
          data={dataList}
          margin={{
            top: uiSizeForGraph.marginTop,
            right: uiSizeForGraph.marginRight,
            left: uiSizeForGraph.marginLeft,
            bottom: uiSizeForGraph.marginBottom,
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
              value: "人口数 (万人)",
              angle: 0,
              offset: -30,
              position: "insideTop",
            }}
          />
          <Tooltip />
          <Legend width={uiSizeForGraph.xAxisLabelWidth} />
          {exitPrefectureNameList.map((exitPrefectureName, index) => {
            return (
              <Line
                key={exitPrefectureName}
                type="monotone"
                dataKey={exitPrefectureName}
                stroke={colorList[index % 5]}
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
