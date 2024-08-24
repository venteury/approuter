"use client";

import { Provider } from "react-redux";
import store from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<div className="text-center flex justify-center items-center text-green-500 w-screen h-screen text-2xl">Loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
