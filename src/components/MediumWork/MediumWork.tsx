import React from "react";
import { mediumValueComputation } from "../../utils";

export const MediumWork = ({ value }: { value: number }) => {
  const mediumValue = mediumValueComputation(value);

  return <div>{mediumValue}</div>;
};
