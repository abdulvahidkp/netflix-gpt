import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  token: string;
  displayName: string;
}

export type UserState = null | User;

const initialState: UserState = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (_, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
