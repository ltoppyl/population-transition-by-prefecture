import React, { useEffect, useState } from "react";

import PrefectureList from "./components/PrefecturesList";
import Graph from "./components/graph/Graph";
import { useMediaQueryContext } from "./responsive/MediaQueryProvider";

const App = () => {
  const [graphData, setGraphData] = useState<object[]>();
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
      {equipment === "mobile" ? (
        <>
          <PrefectureList setGraphData={setGraphData} />
          <Graph equipment={equipment} dataList={graphData} />
        </>
      ) : (
        <div className="components-pc-and-tablet">
          <PrefectureList setGraphData={setGraphData} />
          <Graph equipment={equipment} dataList={graphData} />
        </div>
      )}
    </>
  );
};

export default App;
