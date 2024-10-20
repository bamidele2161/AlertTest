import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  accountType: "",
  businessInfo: {} as { [key: string]: string },
};

export const businessSlice = createSlice({
  name: "businessData",
  initialState: initialState,

  reducers: {
    saveAccountType: (state, action) => {
      state.accountType = action.payload;
    },
    saveBusinessInfo: (state, action) => {
      state.businessInfo = action.payload;
    },
  },
});

export const { saveBusinessInfo, saveAccountType } = businessSlice.actions;

export const selectAccountType = (state: RootState) =>
  state.business.accountType;
export const selectBusinessInfo = (state: RootState) =>
  state.business.businessInfo;
export default businessSlice.reducer;
