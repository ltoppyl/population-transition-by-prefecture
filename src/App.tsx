import React, { useEffect, useState } from "react";

import PrefectureList from "./components/PrefecturesList";
import Graph from "./components/graph/Graph";
import Title from "./components/Title";
import { useMediaQueryContext } from "./components/responsive/MediaQueryProvider";

const App = () => {
  const [graphData, setGraphData] = useState<any[]>();
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
  const [equipment, setEquipment] = useState<string>("pc");

  useEffect(() => {
    if (isMobileSite === true) {
      setEquipment("mobile");
    } else if (isTabletSite === true) {
      setEquipment("tablet");
    } else if (isPcSite === true) {
      setEquipment("pc");
    }
  }, [isMobileSite, isTabletSite, isPcSite]);

  return (
    <>
      <Title equipment={equipment} />
      <PrefectureList setGraphData={setGraphData} />
      <Graph equipment={equipment} dataList={graphData} />
    </>
  );
};

export default App;
