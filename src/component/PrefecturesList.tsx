import React from "react";
import axios from "axios";

const PrefectureList = () => {
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
        console.log(response.data);
      });
  }

  return <p>PrefectureList</p>;
};

export default PrefectureList;
