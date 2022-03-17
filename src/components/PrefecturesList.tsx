import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";

import "../style/style.css";
import FetchPopulationData from "./fetchData/PopulationTransition";
import FetchPrefecturesList from "./fetchData/PrefecturesList";

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
    const fetchPrefecturesList = FetchPrefecturesList(setPrefecturesNameList);
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
