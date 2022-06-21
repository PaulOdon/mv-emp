import WorkspaceData from "./workspace-type-variable";


export function createDataWorkspace(
    ville: string,
    adresse: string
  ): WorkspaceData {
    return {
      ville,
      adresse
    };
  }