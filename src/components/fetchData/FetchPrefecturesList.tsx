import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

const FetchPrefecturesList = (
  setPrefecturesList: Dispatch<SetStateAction<any[] | undefined>>
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
        let prefecturesNameList: any[] = [];

        response.data.result.forEach((data: any) => {
          prefecturesNameList.push(data);
        });

        setPrefecturesList(prefecturesNameList);
      });
  }
};

export default FetchPrefecturesList;
