import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../Pages/home/store/home.store";
const store = configureStore({
  reducer: {
    home:HomeReducer
  },
});
export default store;
