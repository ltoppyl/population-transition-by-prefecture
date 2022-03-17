import React from "react";

const SettingUiSize = (equipment: string) => {
  let uiSize;

  if (equipment === "mobile") {
    uiSize = {
      width: 350,
      height: 300,
      marginTop: 50,
      marginRight: 10,
      marginLeft: 30,
      marginBottom: 0,
    };
  } else {
    uiSize = {
      width: 700,
      height: 350,
      marginTop: 100,
      marginRight: 30,
      marginLeft: 20,
      marginBottom: 0,
    };
  }
  return uiSize;
};

export default SettingUiSize;
