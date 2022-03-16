import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import "../style/style.css";
import { check } from "prettier";
import { randomInt } from "crypto";

type Props = {
  setGraphData: Dispatch<SetStateAction<any[] | undefined>>;
};

const PrefecturesList = ({ setGraphData }: Props) => {
  const [prefecturesList, setPrefecturesList] = useState<any[]>();
  const [checkBoxStatus, setCheckBoxStatus] = useState<boolean[]>([
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
          let prefecturesList: any[] = [];

          response.data.result.forEach((data: any) => {
            prefecturesList.push(data);
          });

          setPrefecturesList(prefecturesList);
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

      let checked_number: any[] = [];
      checkBoxStatus.forEach((check_status, index) => {
        if (check_status === true) {
          checked_number.push(index);
        }
      });

      const number = checked_number[checked_number.length - 1];

      if (number + 1) {
        const res = axios
          .get(
            "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=1&cityCode=-",
            axiosConfig
          )
          .then((response) => {
            let dataList: any[] = [];

            response.data.result.data[0].data.forEach((data: any) => {
              dataList.push(data);
            });

            setGraphData(dataList);
          });
      } else {
        setGraphData(undefined);
      }
    }
  }, [checkBoxStatus]);

  const handleCheckBox = (data: any) => {
    setCheckBoxStatus(
      checkBoxStatus.map((check_statue, index) =>
        index === data.prefCode - 1 ? !check_statue : check_statue
      )
    );
  };

  return (
    <>
      {prefecturesList && (
        <>
          <p>チェックされている県</p>
          {checkBoxStatus.map((check_status, index) => {
            if (check_status === true) {
              return <p key={index}>{prefecturesList[index].prefName}</p>;
            }
          })}
          <p>-------------------------------------</p>
          {prefecturesList.map((prefecturesData) => {
            return (
              <div className="prefecturesList" key={prefecturesData.prefCode}>
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

export default PrefecturesList;
