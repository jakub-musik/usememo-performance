import {
  PerformanceData,
  ParsedPerformanceData
} from "./PerformanceCollector/PerformanceCollector";

// use setTimeout and requestAnimationFrame to wait for a complete render, with all the dom stuff done befor incrementing the counter
// https://stackoverflow.com/questions/26556436/react-after-render-code
export function onNextFrame(callback: () => void) {
  setTimeout(function() {
    window.requestAnimationFrame(callback);
  }, 0);
}

export const superComplicatedValueComputation = (value: number) => {
  for (let i = 0; i < 10; ++i) {
    JSON.parse(JSON.stringify({ i }));
  }
  return value;
};

export const mediumValueComputation = (value: number) => {
  for (let i = 0; i < 1; ++i) {
    JSON.parse(JSON.stringify({ i }));
  }
  return value;
};

export const easyValueComputation = (value: number) => {
  let newValue = 0;
  for (let i = 0; i < 2; ++i) {
    newValue = (2 * value) / 2;
  }
  return newValue;
};

export const parseResults = (results: PerformanceData[]) => {
  const sortedResults = results.reduce<{
    [key: string]: { [key: string]: PerformanceData };
  }>((accumulator, result) => {
    if (!accumulator[result.scenarioId]) {
      accumulator[result.scenarioId] = {};
    }

    accumulator[result.scenarioId][result.run] = result;

    return accumulator;
  }, {});

  const parsedResults = Object.keys(sortedResults).reduce<
    ParsedPerformanceData
  >((accumulator, scenarioKey) => {
    const scenario = sortedResults[scenarioKey];
    if (!accumulator[scenarioKey]) {
      accumulator[scenarioKey] = {
        name: "",
        averageUpdateDuration: 0,
        averageActualDuration: 0,
        averageMountActualDuration: 0,
        averageRerenderDuration: 0,
        averageNotMountRerenderDuration: 0,

        scenario: {},
        actualDuration: 0,
        mountActualDuration: 0,
        rerenderDuration: 0,
        notMountRerenderDuration: 0,
        updateDuration: 0
      };
    }

    accumulator[scenarioKey].scenario = scenario;
    accumulator[scenarioKey].name = scenario[0].id;

    accumulator[scenarioKey].actualDuration = Object.values(scenario).reduce(
      (sum, result) => {
        return sum + result.actualDuration;
      },
      0
    );
    accumulator[scenarioKey].averageActualDuration =
      accumulator[scenarioKey].actualDuration / Object.keys(scenario).length;

    accumulator[scenarioKey].mountActualDuration = Object.values(scenario)
      .filter(result => result.phase === "mount")
      .reduce((sum, result) => {
        return sum + result.actualDuration;
      }, 0);

    accumulator[scenarioKey].mountActualDuration = Object.values(scenario)
      .filter(result => result.phase === "mount")
      .reduce((sum, result) => {
        return sum + result.actualDuration;
      }, 0);

    accumulator[scenarioKey].averageMountActualDuration =
      accumulator[scenarioKey].mountActualDuration /
      Object.values(scenario).filter(result => result.phase === "mount").length;

    accumulator[scenarioKey].rerenderDuration = Object.values(scenario)
      .filter(result => result.valueChanged)
      .reduce((sum, result) => {
        return sum + result.actualDuration;
      }, 0);

    accumulator[scenarioKey].averageRerenderDuration =
      accumulator[scenarioKey].rerenderDuration /
      Object.values(scenario).filter(result => result.valueChanged).length;

    accumulator[scenarioKey].notMountRerenderDuration = Object.values(scenario)
      .filter(result => result.valueChanged && result.phase !== "mount")
      .reduce((sum, result) => {
        return sum + result.actualDuration;
      }, 0);

    accumulator[scenarioKey].averageNotMountRerenderDuration =
      accumulator[scenarioKey].notMountRerenderDuration /
      Object.values(scenario).filter(
        result => result.valueChanged && result.phase !== "mount"
      ).length;

    accumulator[scenarioKey].updateDuration = Object.values(scenario)
      .filter(result => !result.valueChanged && result.phase !== "mount")
      .reduce((sum, result) => {
        return sum + result.actualDuration;
      }, 0);

    accumulator[scenarioKey].averageUpdateDuration =
      accumulator[scenarioKey].updateDuration /
      Object.values(scenario).filter(
        result => !result.valueChanged && result.phase !== "mount"
      ).length;

    return accumulator;
  }, {});

  return parsedResults;
};
