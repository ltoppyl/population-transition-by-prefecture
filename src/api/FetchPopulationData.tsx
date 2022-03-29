import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

import DataFormatForGraph from "../components/DataFormatForGraph";
import { prefecturesListType } from "../type/type";

const FetchPopulationData = (
  checkBoxStatusList: number[],
  setGraphData: Dispatch<SetStateAction<object[] | undefined>>,
  prefecturesList: prefecturesListType[] | undefined
) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.error("environment variables are not set");
  } else {
    const axiosConfig = {
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    };

    let dataList: number[] = [];
    let yearData: number[] = [];
    let dataLength: number = 0;
    if (checkBoxStatusList.length != 0) {
      checkBoxStatusList.forEach((prefecturesNumber, index) => {
        const res = axios
          .get(
            "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=" +
              prefecturesNumber +
              "&cityCode=-",
            axiosConfig
          )
          .then((response) => {
            if (response.status == 200) {
              console.log(response.data.result.data[0].data.length);
              dataLength = response.data.result.data[0].data.length;
              if (index === 0) {
                response.data.result.data[0].data.forEach(
                  (
                    eachYearData: { year: number; value: number },
                    _index: number
                  ) => {
                    yearData.push(eachYearData.year);
                    dataList[dataLength * index + _index] =
                      eachYearData.value / 10000;
                  }
                );
              } else {
                response.data.result.data[0].data.forEach(
                  (
                    eachYearData: { year: number; value: number },
                    _index: number
                  ) => {
                    dataList[dataLength * index + _index] =
                      eachYearData.value / 10000;
                  }
                );
              }
              const newGraphData: object[] = DataFormatForGraph(
                dataList,
                yearData,
                checkBoxStatusList,
                prefecturesList,
                dataLength
              );
              setGraphData(newGraphData);
            } else {
              console.error("http request error");
              console.error("response status:", response.status);
            }
          });
      });
    } else {
      setGraphData(undefined);
    }
  }
};

export default FetchPopulationData;
