import { UseMemoHardWork } from "./components/UseMemoHardWork/UseMemoHardWork";
import { HardWork } from "./components/HardWork/HardWork";
import { UseMemoMediumWork } from "./components/UseMemoMediumWork/UseMemoMediumWork";
import { MediumWork } from "./components/MediumWork/MediumWork";
import { UseMemoEasyWork } from "./components/UseMemoEasyWork/UseMemoEasyWork";
import { EasyWork } from "./components/EasyWork/EasyWork";

interface Scenario {
  component: React.FC<{ value: number }>;
  limit: number;
  frequency: number;
  name: string;
  repeat: number;
  index: number;
}

// const changeRarelyLimit = 30;
// const changeRarelyFrequency = 6;
// const changeRarelyRepeats = 10;
const changeRarelyLimit = 1;
const changeRarelyFrequency = 1;
const changeRarelyRepeats = 1;

// const changeOftenLimit = 30;
// const changeOftenFrequency = 2;
// const changeOftenRepeats = 10;
const changeOftenLimit = 1;
const changeOftenFrequency = 1;
const changeOftenRepeats = 1;

export const scenarios: Array<Scenario> = [
  {
    component: UseMemoHardWork,
    limit: changeRarelyLimit,
    frequency: changeRarelyFrequency,
    name: "UseMemoHardWorkChangeRarely",
    repeat: changeRarelyRepeats
  },
  {
    component: HardWork,
    limit: changeRarelyLimit,
    frequency: changeRarelyFrequency,
    name: "HardWorkChangeRarely",
    repeat: changeRarelyRepeats
  },
  {
    component: UseMemoMediumWork,
    limit: changeRarelyLimit,
    frequency: changeRarelyFrequency,
    name: "UseMemoMediumWorkChangeRarely",
    repeat: changeRarelyRepeats
  },
  {
    component: MediumWork,
    limit: changeRarelyLimit,
    frequency: changeRarelyFrequency,
    name: "MediumWorkChangeRarely",
    repeat: changeRarelyRepeats
  },
  {
    component: UseMemoEasyWork,
    limit: changeRarelyLimit,
    frequency: changeRarelyFrequency,
    name: "UseMemoEasyWorkChangeRarely",
    repeat: changeRarelyRepeats
  },
  {
    component: EasyWork,
    limit: changeRarelyLimit,
    frequency: changeRarelyFrequency,
    name: "EasyWorkChangeRarely",
    repeat: changeRarelyRepeats
  },
  {
    component: UseMemoHardWork,
    limit: changeOftenLimit,
    frequency: changeOftenFrequency,
    name: "UseMemoHardWorkChangeOften",
    repeat: changeOftenRepeats
  },
  {
    component: HardWork,
    limit: changeOftenLimit,
    frequency: changeOftenFrequency,
    name: "HardWorkChangeOften",
    repeat: changeOftenRepeats
  },
  {
    component: UseMemoMediumWork,
    limit: changeOftenLimit,
    frequency: changeOftenFrequency,
    name: "UseMemoMediumWorkChangeOften",
    repeat: changeOftenRepeats
  },
  {
    component: MediumWork,
    limit: changeOftenLimit,
    frequency: changeOftenFrequency,
    name: "MediumWorkChangeOften",
    repeat: changeOftenRepeats
  },
  {
    component: UseMemoEasyWork,
    limit: changeOftenLimit,
    frequency: changeOftenFrequency,
    name: "UseMemoEasyWorkChangeOften",
    repeat: changeOftenRepeats
  },
  {
    component: EasyWork,
    limit: changeOftenLimit,
    frequency: changeOftenFrequency,
    name: "EasyWorkChangeOften",
    repeat: changeOftenRepeats
  }
  //   {
  //     component: UseMemoEasyWork,
  //     limit: 1,
  //     frequency: 1,
  //     name: "UseMemoMountALot",
  //     repeat: 100
  //   },
  //   {
  //     component: EasyWork,
  //     limit: 1,
  //     frequency: 1,
  //     name: "MountALot",
  //     repeat: 100
  //   }
].map((scenario, index) => ({ ...scenario, index }));
