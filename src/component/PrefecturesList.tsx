import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/style.css";

const PrefecturesList = () => {
  const [prefecturesList, setPrefecturesList] = useState<any[]>();

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
          let prefecturesList: any[] = [];

          response.data.result.forEach((data: any) => {
            prefecturesList.push(data.prefName);
          });

          setPrefecturesList(prefecturesList);
        });
    }
  }, []);

  return (
    <>
      {prefecturesList && (
        <>
          {prefecturesList.map((prefectures) => {
            return (
              <div className="prefecturesList" key={prefectures}>
                {/* XXX: なぜ label で囲うとチェックボックスが表示されるか不明 */}
                <label>
                  <input key={prefectures} type="checkbox" />
                  {prefectures}{" "}
                </label>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default PrefecturesList;
