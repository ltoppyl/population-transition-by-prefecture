import React, { useEffect, useState } from "react";
import PrefectureList from "./component/PrefecturesList";
import Graph from "./component/Graph";

import axios from "axios";

const App = () => {
  const [data, setData] = useState<any[]>();
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
          "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=2&cityCode=-",
          axiosConfig
        )
        .then((response) => {
          let dataList: any[] = [];

          response.data.result.data[0].data.forEach((data: any) => {
            dataList.push(data);
          });

          setData(dataList);
        });
    }
  }, []);

  return (
    <>
      <PrefectureList />
      <Graph data={data} />
    </>
  );
};

export default App;
