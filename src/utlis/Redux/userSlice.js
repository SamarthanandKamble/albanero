import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: " ",
  initialState: {
    users: [
      { id: 1, name: "User 1", access: [true, false, true, false] },
      { id: 2, name: "User 2", access: [false, true, false, true] },
      { id: 3, name: "User 3", access: [true, true, false, true] },
      { id: 4, name: "User 4", access: [false, true, true, true] },
    ],

    selectedUser: "",
  },
  reducers: {
    updateUserAccess: (state, action) => {
      const { userId, cardIndex } = action.payload;
      const user = state.users.find((user) => user.id === userId);
      if (user) {
        user.access[cardIndex] = !user.access[cardIndex];
      }
    },
    updateSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { updateUserAccess, updateSelectedUser } = userSlice.actions;
export default userSlice.reducer;
