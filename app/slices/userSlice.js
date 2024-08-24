"use client";

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  reducers: {
    setUserInfo(state, action) {
      const { firstName, lastName, email, phone } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phone = phone;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
