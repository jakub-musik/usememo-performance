import React, { useMemo } from "react";
import { mediumValueComputation } from "../../utils";

export const UseMemoMediumWork = ({ value }: { value: number }) => {
  const mediumValue = useMemo(() => mediumValueComputation(value), [value]);

  return <div>{mediumValue}</div>;
};
