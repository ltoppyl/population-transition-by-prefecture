import React, { useState } from "react";
import PrefectureList from "./components/PrefecturesList";
import Graph from "./components/Graph";
import Title from "./components/Title";

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
