import React from "react";
import {
  PerformanceData,
  ParsedPerformanceData
} from "../../PerformanceCollector/PerformanceCollector";

export const Results = ({
  results,
  parsedResults
}: {
  results: PerformanceData[];
  parsedResults: ParsedPerformanceData;
}) => {
  const result = results[0];
  const keys = Object.keys(result);
  const parsed = Object.values(parsedResults);
  const parsedKeys = Object.keys(parsed[0]).filter(key => key !== "scenario");

  return (
    <div>
      <a href="/">AGAIN</a>
      <h1>PARSED</h1>
      <div>{parsedKeys.join(",")}</div>
      {parsed.map(result => {
        const { scenario, ...obj } = result;
        return <div key={obj.name}>{Object.values(obj).join(",")}</div>;
      })}
      <h1>RAW</h1>
      <div>{keys.join(",")}</div>
      {results.map(result => (
        <div key={`${result.scenarioId}_${result.run}`}>
          {keys.map(key => result[key]).join(",")}
        </div>
      ))}
    </div>
  );
};
