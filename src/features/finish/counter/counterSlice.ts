"use client";
import { createSlice } from "@reduxjs/toolkit";
export type CounterState = {
  score: number;
};

const initialState: CounterState = { score: 0 };
const CounterSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 1;
    },
    reset: (state) => {
      state.score = 0;
    },
  },
});
export const { increment, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
