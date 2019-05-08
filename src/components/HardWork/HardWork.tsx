import React from "react";
import { superComplicatedValueComputation } from "../../utils";

export const HardWork = ({ value }: { value: number }) => {
  const superComplicatedValue = superComplicatedValueComputation(value);

  return <div>{superComplicatedValue}</div>;
};
