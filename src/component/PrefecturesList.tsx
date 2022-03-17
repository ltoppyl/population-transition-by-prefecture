import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";

import "../style/style.css";
import FetchPopulationData from "./fetchData/PopulationTransition";

type Props = {
  setGraphData: Dispatch<SetStateAction<any[] | undefined>>;
};

const prefecturesNameList = ({ setGraphData }: Props) => {
  const [prefecturesNameList, setPrefecturesNameList] = useState<any[]>();
  const [checkBoxStatusList, setCheckBoxStatusList] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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
          let prefecturesNameList: any[] = [];

          response.data.result.forEach((data: any) => {
            prefecturesNameList.push(data);
          });

          setPrefecturesNameList(prefecturesNameList);
        });
    }
  }, []);

  useEffect(() => {
    const fetchPopulationData = FetchPopulationData(
      checkBoxStatusList,
      setGraphData
    );
  }, [checkBoxStatusList]);

  const handleCheckBox = (data: any) => {
    setCheckBoxStatusList(
      checkBoxStatusList.map((checkStatue, index) =>
        index === data.prefCode - 1 ? !checkStatue : checkStatue
      )
    );
  };

  return (
    <>
      {prefecturesNameList && (
        <div className="prefectures-name-list">
          {prefecturesNameList.map((prefecturesData) => {
            return (
              <div key={prefecturesData.prefCode}>
                {/* XXX: なぜ label で囲うとチェックボックスが表示されるか不明 */}
                <label>
                  <input
                    key={prefecturesData.prefCode}
                    type="checkbox"
                    onClick={() => {
                      handleCheckBox(prefecturesData);
                    }}
                  />
                  {prefecturesData.prefName}{" "}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default prefecturesNameList;
