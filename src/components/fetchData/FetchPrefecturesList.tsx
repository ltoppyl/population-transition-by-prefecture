import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

const FetchPrefecturesList = (
  setPrefecturesList: Dispatch<SetStateAction<object[] | undefined>>
) => {
  if (!process.env.REACT_APP_API_KEY) {
    console.error("environment variables are not set");
  } else {
    const axiosConfig = {
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    };

    const res = axios
      .get(
        "https://opendata.resas-portal.go.jp/api/v1/prefectures",
        axiosConfig
      )
      .then((response) => {
        let prefecturesNameList: object[] = [];

        response.data.result.forEach((data: object) => {
          prefecturesNameList.push(data);
        });

        setPrefecturesList(prefecturesNameList);
      });
  }
};

export default FetchPrefecturesList;
