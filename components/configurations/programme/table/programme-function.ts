import ProgrammeData from "./programme-type-variable";

export function createDataProgramme(
  programme: string,
  parente: string
): ProgrammeData {
  return {
    programme,
    parente,
  };
}
