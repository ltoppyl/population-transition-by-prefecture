import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";

import "../styles/style.css";
import FetchPopulationData from "./fetchData/FetchPopulationData";
import FetchPrefecturesList from "./fetchData/FetchPrefecturesList";

type Props = {
  setGraphData: Dispatch<SetStateAction<object[] | undefined>>;
};

const prefecturesNameList = ({ setGraphData }: Props) => {
  const [prefecturesList, setPrefecturesList] = useState<any[] | undefined>();
  const [checkBoxStatusList, setCheckBoxStatusList] = useState<boolean[]>(
    () => {
      const settingInitialValue = new Array<boolean>(47).fill(false);
      return settingInitialValue;
    }
  );

  useEffect(() => {
    FetchPrefecturesList(setPrefecturesList);
  }, []);

  useEffect(() => {
    FetchPopulationData(checkBoxStatusList, setGraphData, prefecturesList);
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
