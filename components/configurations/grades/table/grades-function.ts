import GradesData from "./grades-type-variable";


export function createDataGrades(
    classe: string,
    valeur: string
  ): GradesData {
    return {
      classe,
      valeur
    };
  }