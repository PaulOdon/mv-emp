import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import config from "../../config/config";

export const employeSlice = createSlice({
    name: "employe",
    initialState: {
        list: config.borderRadius,
    },
    reducers: {
      addNewEmploye: (state, action) => {
    },
    },
  });
  
  export const {addNewEmploye} = employeSlice.actions;
  