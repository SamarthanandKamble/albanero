import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [
      { id: 1, title: "Card_1" },
      { id: 2, title: "Card_2" },
      { id: 3, title: "Card_3" },
      { id: 4, title: "Card_4" },
    ],
  },
});

export const {} = cardSlice.actions;
export default cardSlice.reducer;
