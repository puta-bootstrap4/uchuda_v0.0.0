"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/finish/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
// TypeScript用型エクスポート
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
