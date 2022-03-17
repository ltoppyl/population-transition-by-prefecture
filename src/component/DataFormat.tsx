import React from "react";

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

  let returnData: any[] = [];

  switch (prefecturesNumberList.length) {
    case 1:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
        };
        returnData.push(_returnData);
      }
      break;
    case 2:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]: dataList[i + 18],
        };
        returnData.push(_returnData);
      }
      break;
    case 3:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]: dataList[i + 18],
          [prefecturesNameList[prefecturesNumberList[2]]]: dataList[i + 36],
        };
        returnData.push(_returnData);
      }
      break;
    default:
      console.error("Noting Data");
      break;
  }

  return returnData;
};

export default DataFormat;
