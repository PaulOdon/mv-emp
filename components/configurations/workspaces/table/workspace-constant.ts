import { createDataWorkspace } from "./workspace-function";
import { WorkspaceHeadCell } from "./workspace-type-variable";




export const workspaceheadCells: readonly WorkspaceHeadCell[] = [
    {
      id: 'ville',
      numeric: false,
      disablePadding: true,
      label: 'Nom',
    },
    {
      id: 'adresse',
      numeric: true,
      disablePadding: true,
      label: 'Adresse',
    },

  ];

  export const workspacerows = [
    createDataWorkspace('Ville 1', 'address'),
    createDataWorkspace('Ville 2', 'address'),
    createDataWorkspace('Ville 3', 'address'),
    createDataWorkspace('Ville 4', 'address'),
    createDataWorkspace('Ville 5', 'address'),
    createDataWorkspace('Ville 6', 'address'),
    createDataWorkspace('Ville 7', 'address'),
    createDataWorkspace('Ville 8', 'address'),
    createDataWorkspace('Ville 9', 'address'),
    createDataWorkspace('Ville 10', 'address'),
    createDataWorkspace('Ville 11', 'address'),
    createDataWorkspace('Ville 12', 'address'),
  ];