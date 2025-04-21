"use client";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function StoreWrapper({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
