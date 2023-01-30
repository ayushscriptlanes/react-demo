import { createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@reduxjs/toolkit";
const initialState: {
  name: string;
  age: number;
  address: string;
} = {
  address: "",
  age: 10,
  name: "",
};

const HomeReducer = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    add_user_data: (
      state,
      action: PayloadAction<{
        name: string;
        age: number;
        address: string;
      }>
    ) => {
      state.address = action.payload.address;
      state.age=action.payload.age
      state.name=action.payload.name
    },
  },
});
export const { add_user_data } = HomeReducer.actions;
export default HomeReducer.reducer;
