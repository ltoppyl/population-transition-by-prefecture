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

  return (
    <>
      {prefectureList && (
        <>
          {prefectureList.map((data) => {
            return (
              <div key={data}>
                {/* XXX: なぜ label で囲うとチェックボックスが表示されるか不明 */}
                <label>
                  <input key={data} type="checkbox" />
                  {data}
                </label>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default PrefectureList;

function onBlurHandler():
  | React.FocusEventHandler<HTMLInputElement>
  | undefined {
  throw new Error("Function not implemented.");
}
