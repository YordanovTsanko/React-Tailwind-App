import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlicer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true, // delete on production
});

export default store;
