import React, { useEffect, useRef } from "react";
import drawChart from "./drawChart";
import "./style.css";

const DonutChart = ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      drawChart(ref.current, data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <div className="chart-container">
      <div className="graph" ref={ref} />
    </div>
    
  );
};

export default React.memo(DonutChart);