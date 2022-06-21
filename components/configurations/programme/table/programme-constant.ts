import { createDataProgramme } from "./programme-function";
import { ProgrammeHeadCell } from "./programme-type-variable";

export const programmeheadCells: readonly ProgrammeHeadCell[] = [
  {
    id: "programme",
    numeric: false,
    disablePadding: true,
    label: "Departement",
  },
  {
    id: "parente",
    numeric: true,
    disablePadding: true,
    label: "Departement parent",
  },
];

export const programmerows = [
  createDataProgramme("Departement 1", "Département parent"),
  createDataProgramme("Departement 2", "Département parent"),
  createDataProgramme("Departement 3", "Département parent"),
  createDataProgramme("Departement 4", "Département parent"),
  createDataProgramme("Departement 5", "Département parent"),
  createDataProgramme("Departement 6", "Département parent"),
  createDataProgramme("Departement 7", "Département parent"),
  createDataProgramme("Departement 8", "Département parent"),
  createDataProgramme("Departement 9", "Département parent"),
  createDataProgramme("Departement 10", "Département parent"),
  createDataProgramme("Departement 11", "Département parent"),
  createDataProgramme("Departement 12", "Département parent"),
];
