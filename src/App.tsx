import React, { useState } from "react";
import PrefectureList from "./component/PrefecturesList";
import Graph from "./component/Graph";
import Title from "./component/Title";

const App = () => {
  const [graphData, setGraphData] = useState<any[]>();

  return (
    <>
      <Title />
      <PrefectureList setGraphData={setGraphData} />
      <Graph dataList={graphData} />
    </>
  );
};

export default App;
