import { createDataSMIE } from "./function-smie";
import { HeadCellSMIE } from "./type-variable-smie";

export const headCellsSMIE: readonly HeadCellSMIE[] = [
  {
    id: "smie",
    numeric: false,
    disablePadding: true,
    label: "SMIE",
  },
];

export const rowssmie = [
  createDataSMIE("SMIE 1"),
  createDataSMIE("SMIE 2"),
  createDataSMIE("SMIE 3"),
  createDataSMIE("SMIE 4"),
  createDataSMIE("SMIE 6"),
  createDataSMIE("SMIE 7"),
  createDataSMIE("SMIE 8"),
  createDataSMIE("SMIE 9"),
  createDataSMIE("SMIE 10"),
  createDataSMIE("SMIE 11"),
  createDataSMIE("SMIE 12"),
  createDataSMIE("SMIE 13"),
  createDataSMIE("SMIE 14"),
  createDataSMIE("SMIE 15"),
];
