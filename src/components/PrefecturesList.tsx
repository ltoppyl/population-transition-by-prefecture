import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";

import "../styles/style.css";
import { prefecturesListType } from "../type/type";
import FetchPopulationData from "./fetchData/FetchPopulationData";
import FetchPrefecturesList from "./fetchData/FetchPrefecturesList";

type Props = {
  setGraphData: Dispatch<SetStateAction<object[] | undefined>>;
};

const prefecturesNameList = ({ setGraphData }: Props) => {
  const [prefecturesList, setPrefecturesList] = useState<
    prefecturesListType[] | undefined
  >();
  const [checkBoxStatusTrueList, setCheckBoxStatusTrueList] = useState<
    number[]
  >([]);

  useEffect(() => {
    FetchPrefecturesList(setPrefecturesList);
  }, []);

  useEffect(() => {
    FetchPopulationData(checkBoxStatusTrueList, setGraphData, prefecturesList);
  }, [checkBoxStatusTrueList]);

  const handleCheckBox = (data: prefecturesListType) => {
    const newCheckBoxStatusTrueList = checkBoxStatusTrueList.concat();
    if (checkBoxStatusTrueList.includes(data.prefCode) == true) {
      const deletePredCode = newCheckBoxStatusTrueList.splice(
        newCheckBoxStatusTrueList.indexOf(data.prefCode),
        1
      );
    } else {
      const addPredCode = newCheckBoxStatusTrueList.push(data.prefCode);
    }
    setCheckBoxStatusTrueList(newCheckBoxStatusTrueList);
  };

  return (
    <>
      {prefecturesList && (
        <div className="prefectures-name-list">
          {prefecturesList.map((prefecturesData) => {
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
