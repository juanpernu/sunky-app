import React, { createContext } from "react";
import { Loading } from "../components";
import { useLoading } from "../hooks";

export const LoadingContext = createContext({
  stopLoading: () => null,
  startLoading: () => null,
  isLoading: null,
});

export const LoadingProvider = ({ children }) => {
  const { stopLoading, startLoading, isLoading } = useLoading();

  return (
    <LoadingContext.Provider value={{ stopLoading, startLoading, isLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
};
