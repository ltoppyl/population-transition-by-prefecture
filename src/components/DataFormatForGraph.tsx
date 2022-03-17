import { tmpdir } from "os";
import React from "react";
import { isTemplateExpression } from "typescript";

const DataFormat = (
  dataList: any[],
  yearData: any[],
  prefecturesNumberList: number[]
) => {
  const prefecturesNameList = [
    "北海道",
    "青森",
    "岩手",
    "宮城",
    "秋田",
    "山形",
    "福島",
    "茨城",
    "栃木",
    "群馬",
    "埼玉",
    "千葉",
    "東京",
    "神奈川",
    "新潟",
    "富山",
    "石川",
    "福井",
    "山梨",
    "長野",
    "岐阜",
    "静岡",
    "愛知",
    "三重",
    "滋賀",
    "京都",
    "大阪",
    "兵庫",
    "奈良",
    "和歌山",
    "鳥取",
    "島根",
    "岡山",
    "広島",
    "山口",
    "徳島",
    "香川",
    "愛媛",
    "高知",
    "福岡",
    "佐賀",
    "長崎",
    "熊本",
    "大分",
    "宮崎",
    "鹿児島",
    "沖縄",
  ];

  const yearDataAmount = 18;
  let forGraphData: any[] = [];

  for (let i = 0; i <= 17; i++) {
    let _returnData: { [key: string]: number };
    _returnData = {
      year: yearData[i],
    };
    for (let j = 0; j < prefecturesNumberList.length; j++) {
      _returnData[prefecturesNameList[prefecturesNumberList[j]]] =
        dataList[18 * j + i];
    }
    forGraphData.push(_returnData);
  }

  return forGraphData;
};

export default DataFormat;
