import React from "react";
import "./App.css";
import { PerformanceCollector } from "./PerformanceCollector/PerformanceCollector";

export const App: React.FC = () => {
  const data: number[] = Array.from(Array(10000).keys());

  return <PerformanceCollector data={data} />;
};

export default React.memo(App);
