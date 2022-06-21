import CategorieData from "./categorie-type-variable";


export function createDataCategorie(
    categorie: string,
    valeur: string
  ): CategorieData {
    return {
      categorie,
      valeur
    };
  }