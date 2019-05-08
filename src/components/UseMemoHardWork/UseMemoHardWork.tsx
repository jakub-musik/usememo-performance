import React, { useMemo } from "react";
import { superComplicatedValueComputation } from "../../utils";

export const UseMemoHardWork = ({ value }: { value: number }) => {
  const superComplicatedValue = useMemo(
    () => superComplicatedValueComputation(value),
    [value]
  );

  return <div>{superComplicatedValue}</div>;
};
