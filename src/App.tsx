import React, { useState } from "react";
import PrefectureList from "./component/PrefecturesList";
import Graph from "./component/Graph";

const App = () => {
  const [graphData, setGraphData] = useState<any[]>();

  return (
    <>
      <PrefectureList setGraphData={setGraphData} />
      <Graph data={graphData} />
    </>
  );
};

export default App;
