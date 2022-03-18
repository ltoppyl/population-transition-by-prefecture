import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

import DataFormatForGraph from "../DataFormatForGraph";

const FetchPopulationData = (
  checkBoxStatusList: boolean[],
  setGraphData: Dispatch<SetStateAction<object[] | undefined>>,
  prefecturesList: object[] | undefined
) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.error("environment variables are not set");
  } else {
    const axiosConfig = {
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    };

    let checkedNumberList: number[] = [];
    checkBoxStatusList.forEach((check_status, index) => {
      if (check_status === true) {
        checkedNumberList.push(index);
      }
    });

    let dataList: number[] = [];
    let yearData: number[] = [];

    if (checkedNumberList.length != 0) {
      checkedNumberList.forEach((prefecturesNumber, index) => {
        const res = axios
          .get(
            "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
              (prefecturesNumber + 1) +
              "&cityCode=-",
            axiosConfig
          )
          .then((response) => {
            if (index === 0) {
              response.data.result.data[0].data.forEach(
                (
                  eachYearData: { year: number; value: number },
                  _index: number
                ) => {
                  yearData.push(eachYearData.year);
                  dataList[18 * index + _index] = eachYearData.value / 10000;
                }
              );
            } else {
              response.data.result.data[0].data.forEach(
                (
                  eachYearData: { year: number; value: number },
                  _index: number
                ) => {
                  dataList[18 * index + _index] = eachYearData.value / 10000;
                }
              );
            }
            const newGraphData: object[] = DataFormatForGraph(
              dataList,
              yearData,
              checkedNumberList,
              prefecturesList
            );
            setGraphData(newGraphData);
          });
      });
    } else {
      setGraphData(undefined);
    }
  }
};

export default FetchPopulationData;
