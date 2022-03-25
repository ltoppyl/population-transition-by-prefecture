import React from "react";

import { prefecturesListType } from "../type/type";

const DataFormatForGraph = (
  dataList: number[],
  yearData: number[],
  prefecturesNumberList: number[],
  prefecturesList: prefecturesListType[] | undefined
) => {
  const yearDataAmount = yearData.length;

  let prefecturesNameList: string[] = [];
  prefecturesList?.forEach((prefecturesData) => {
    prefecturesNameList.push(prefecturesData.prefName);
  });

  let forGraphData: object[] = [];

  for (let i = 0; i <= 17; i++) {
    let _returnData: { [key: string]: number };
    _returnData = {
      year: yearData[i],
    };
    for (let j = 0; j < prefecturesNumberList.length; j++) {
      _returnData[prefecturesNameList[prefecturesNumberList[j] - 1]] =
        dataList[yearDataAmount * j + i];
    }
    forGraphData.push(_returnData);
  }

  return forGraphData;
};

export default DataFormatForGraph;
