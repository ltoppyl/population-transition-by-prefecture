import React, { Dispatch, SetStateAction } from "react";
import axios from "axios";

import { prefecturesListType } from "../type/type";

const FetchPrefecturesList = (
  setPrefecturesList: Dispatch<
    SetStateAction<prefecturesListType[] | undefined>
  >
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
        if (response.status == 200) {
          console.log(response);
          let prefecturesNameList: prefecturesListType[] = [];

          response.data.result.forEach((data: prefecturesListType) => {
            prefecturesNameList.push(data);
          });

          setPrefecturesList(prefecturesNameList);
        } else {
          console.error("http request error");
          console.error("response status:", response.status);
        }
      });
  }
};

export default FetchPrefecturesList;
