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

  const yearDataAmount = 18;
  let forGraphData: any[] = [];

  switch (prefecturesNumberList.length) {
    case 1:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 2:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 3:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 4:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
          [prefecturesNameList[prefecturesNumberList[3]]]:
            dataList[i + yearDataAmount * 3],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 5:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
          [prefecturesNameList[prefecturesNumberList[3]]]:
            dataList[i + yearDataAmount * 3],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 4],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 6:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
          [prefecturesNameList[prefecturesNumberList[3]]]:
            dataList[i + yearDataAmount * 3],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 4],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 5],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 7:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
          [prefecturesNameList[prefecturesNumberList[3]]]:
            dataList[i + yearDataAmount * 3],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 4],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 5],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 6],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 8:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
          [prefecturesNameList[prefecturesNumberList[3]]]:
            dataList[i + yearDataAmount * 3],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 4],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 5],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 6],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 7],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 9:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
          [prefecturesNameList[prefecturesNumberList[3]]]:
            dataList[i + yearDataAmount * 3],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 4],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 5],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 6],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 7],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 8],
        };
        forGraphData.push(_returnData);
      }
      break;
    case 10:
      for (let i = 0; i <= 17; i++) {
        const _returnData = {
          year: yearData[i],
          [prefecturesNameList[prefecturesNumberList[0]]]: dataList[i],
          [prefecturesNameList[prefecturesNumberList[1]]]:
            dataList[i + yearDataAmount],
          [prefecturesNameList[prefecturesNumberList[2]]]:
            dataList[i + yearDataAmount * 2],
          [prefecturesNameList[prefecturesNumberList[3]]]:
            dataList[i + yearDataAmount * 3],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 4],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 5],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 6],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 7],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 8],
          [prefecturesNameList[prefecturesNumberList[4]]]:
            dataList[i + yearDataAmount * 9],
        };
        forGraphData.push(_returnData);
      }
      break;

    default:
      console.error("exceeding the amount of data ");
      break;
  }

  return forGraphData;
};

export default DataFormat;
