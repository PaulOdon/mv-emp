import LevelData from "./level-type-variable";


export function createDataLevel(
    echellon: string,
    valeur: string
  ): LevelData {
    return {
     echellon,
     valeur
    };
  }