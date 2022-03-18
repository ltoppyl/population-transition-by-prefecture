import React from "react";

const SettingUiSize = (equipment: string) => {
  let uiSize;

  switch (equipment) {
    case "mobile":
      uiSize = {
        width: 350,
        height: 300,
        marginTop: 50,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 0,
        xAxisLabelWidth: 295,
      };
      break;
    case "tablet":
      uiSize = {
        width: 700,
        height: 350,
        marginTop: 100,
        marginRight: 35,
        marginLeft: 20,
        marginBottom: 0,
        xAxisLabelWidth: 630,
      };
      break;
    case "pc":
      uiSize = {
        width: 700,
        height: 350,
        marginTop: 100,
        marginRight: 35,
        marginLeft: 20,
        marginBottom: 0,
        xAxisLabelWidth: 630,
      };
      break;
    default:
      uiSize = {
        width: 700,
        height: 350,
        marginTop: 100,
        marginRight: 35,
        marginLeft: 20,
        marginBottom: 0,
        xAxisLabelWidth: 630,
      };
      break;
  }

  console.log(uiSize);
  return uiSize;
};

export default SettingUiSize;
