"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, data } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        Object.assign(existingUser, data);
      }
    },

    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },
  },
});

export const {
  addUser,
  setUsers,
  updateUser,
  deleteUser,
  setLoading,
  setError,
} = userSlice.actions;

export default userSlice.reducer;
