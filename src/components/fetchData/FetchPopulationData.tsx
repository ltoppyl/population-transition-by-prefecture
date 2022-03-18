import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

import DataFormatForGraph from "../DataFormatForGraph";

const FetchPopulationData = (
  checkBoxStatusList: any[],
  setGraphData: Dispatch<SetStateAction<any[] | undefined>>
) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.error("environment variables are not set");
  } else {
    const axiosConfig = {
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    };

    let checkedNumberList: any[] = [];
    checkBoxStatusList.forEach((check_status, index) => {
      if (check_status === true) {
        checkedNumberList.push(index);
      }
    });

    let dataList: any[] = [];
    let yearData: any[] = [];

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
                (eachYearData: { year: any; value: any }, _index: number) => {
                  yearData.push(eachYearData.year);
                  dataList[18 * index + _index] = eachYearData.value / 10000;
                }
              );
            } else {
              response.data.result.data[0].data.forEach(
                (eachYearData: { year: any; value: any }, _index: number) => {
                  dataList[18 * index + _index] = eachYearData.value / 10000;
                }
              );
            }
            const newGraphData = DataFormatForGraph(
              dataList,
              yearData,
              checkedNumberList
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