import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import "../style/style.css";
import DataFormat from "./DataFormatForGraph";

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
                    dataList[18 * index + _index] = eachYearData.value;
                  }
                );
              } else {
                response.data.result.data[0].data.forEach(
                  (eachYearData: { year: any; value: any }, _index: number) => {
                    dataList[18 * index + _index] = eachYearData.value;
                  }
                );
              }
              const newGraphData = DataFormat(
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
        <>
          {prefecturesNameList.map((prefecturesData) => {
            return (
              <div
                className="prefecturesNameList"
                key={prefecturesData.prefCode}
              >
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
        </>
      )}
    </>
  );
};

export default prefecturesNameList;
