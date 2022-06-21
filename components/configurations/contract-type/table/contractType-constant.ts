import { createDataContractType } from "./contractType-function";
import { ContractTypeHeadCell } from "./contractType-type-variable";




export const contractTypeheadCells: readonly ContractTypeHeadCell[] = [
    {
      id: 'contractType',
      numeric: false,
      disablePadding: true,
      label: 'Type de contrat',
    },
  ];

  export const contractTyperows = [
    createDataContractType('Contract 1'),
    createDataContractType('Contract 2'),
    createDataContractType('Contract 3'),
    createDataContractType('Contract 4'),
    createDataContractType('Contract 5'),
    createDataContractType('Contract 6'),
    createDataContractType('Contract 7'),
    createDataContractType('Contract 8'),
    createDataContractType('Contract 9'),
    createDataContractType('Contract 10'),
    createDataContractType('Contract 11'),
    createDataContractType('Contract 12'),
  ];