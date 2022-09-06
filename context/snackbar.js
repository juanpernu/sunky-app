import React, { createContext } from "react";
import { Snackbar } from "../components";
import { useSnackbar } from "../hooks";

export const SnackbarContext = createContext({
  showSuccessSnackbar: () => false,
  showErrorSnackbar: () => false,
});

export const SnackbarProvider = ({ children }) => {
  const {
    isOpenSnackbar,
    snackbarMessage,
    snackbarType,
    showErrorSnackbar,
    showSuccessSnackbar,
    hideSnackbar,
  } = useSnackbar();

  return (
    <SnackbarContext.Provider
      value={{ showSuccessSnackbar, showErrorSnackbar }}
    >
      {children}
      {isOpenSnackbar && (
        <Snackbar
          message={snackbarMessage}
          type={snackbarType}
          onChange={hideSnackbar}
        />
      )}
    </SnackbarContext.Provider>
  );
};
