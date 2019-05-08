import React from "react";
import { easyValueComputation } from "../../utils";

export const EasyWork = ({ value }: { value: number }) => {
  const easyValue = easyValueComputation(value);

  return <div>{easyValue}</div>;
};
