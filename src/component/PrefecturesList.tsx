import React, { useState, useEffect } from "react";
import axios from "axios";

const PrefectureList = () => {
  const [prefectureList, setPrefectureList] = useState<any[]>();

  useEffect(() => {
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
          let prefectureList: any[] = [];

          response.data.result.forEach((data: any) => {
            prefectureList.push(data.prefName);
          });

          setPrefectureList(prefectureList);
        });
    }
  }, []);

  return <p>{prefectureList}</p>;
};

export default PrefectureList;
