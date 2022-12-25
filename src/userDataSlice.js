import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    userDetails: {},
  },
  reducers: {
    dispatchUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export default userDataSlice.reducer;

export const userDataActions = userDataSlice.actions;
