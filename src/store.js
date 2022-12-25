import { configureStore } from "@reduxjs/toolkit";
import dispatchUserDataReducer from "./userDataSlice";

export default configureStore({
  reducer: {
    fetchUserData: dispatchUserDataReducer,
  },
});
