import { useState, useCallback } from "react";

type SnackbarType = "success" | "error" | "warning" | "info";

interface SnackbarState {
  isSnackbarOpen: boolean;
  message: string;
  type: SnackbarType;
}

export const useSnackbarHook = () => {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    isSnackbarOpen: false,
    message: "",
    type: "success",
  });

  const openSnackbar = useCallback((message: string, type: SnackbarType = "success") => {
    setSnackbarState({ isSnackbarOpen: true, message, type });
  }, []);

  const closeSnackbar = useCallback(() => {
    setSnackbarState((prev) => ({ ...prev, isSnackbarOpen: false }));
  }, []);

  return { snackbarState, openSnackbar, closeSnackbar };
};
