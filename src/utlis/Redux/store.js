import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cardReducer from "./cardSlice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    card: cardReducer,
  },
});
