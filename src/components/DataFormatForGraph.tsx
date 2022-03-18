import React from "react";

const DataFormatForGraph = (
  dataList: any[],
  yearData: any[],
  prefecturesNumberList: number[],
  prefecturesList: any[] | undefined
) => {
  let prefecturesNameList: any[] = [];
  prefecturesList?.forEach((prefecturesData) => {
    prefecturesNameList.push(prefecturesData.prefName);
  });

  const yearDataAmount = 18;
  let forGraphData: any[] = [];

  for (let i = 0; i <= 17; i++) {
    let _returnData: { [key: string]: number };
    _returnData = {
      year: yearData[i],
    };
    for (let j = 0; j < prefecturesNumberList.length; j++) {
      _returnData[prefecturesNameList[prefecturesNumberList[j]]] =
        dataList[yearDataAmount * j + i];
    }
    forGraphData.push(_returnData);
  }

  return forGraphData;
};

export default DataFormatForGraph;
