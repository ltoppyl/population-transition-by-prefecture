import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";

import "../styles/style.css";
import FetchPopulationData from "./fetchData/FetchPopulationData";
import FetchPrefecturesList from "./fetchData/FetchPrefecturesList";

type Props = {
  setGraphData: Dispatch<SetStateAction<any[] | undefined>>;
};

const prefecturesNameList = ({ setGraphData }: Props) => {
  const [prefecturesNameList, setPrefecturesNameList] = useState<any[]>();
  const [checkBoxStatusList, setCheckBoxStatusList] = useState<boolean[]>(
    () => {
      const settingInitialValue = new Array<boolean>(47).fill(false);
      return settingInitialValue;
    }
  );

  useEffect(() => {
    FetchPrefecturesList(setPrefecturesNameList);
  }, []);

  useEffect(() => {
    FetchPopulationData(checkBoxStatusList, setGraphData);
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
