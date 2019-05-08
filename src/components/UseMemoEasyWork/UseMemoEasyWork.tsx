import React, { useMemo } from "react";
import { easyValueComputation } from "../../utils";

export const UseMemoEasyWork = ({ value }: { value: number }) => {
  const easyValue = useMemo(() => easyValueComputation(value), [value]);

  return <div>{easyValue}</div>;
};
