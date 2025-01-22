import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";
import React from "react";

interface CustomSnackbarProps {
  message: string;
  isSnackbarOpen: boolean;
  setIsSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "success" | "error" | "warning" | "info";
}
export const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  type,
  message,
  isSnackbarOpen,
  setIsSnackbarOpen,
}) => {
  const handleCloseSnackBar = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
  };
  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={5000}
      onClose={handleCloseSnackBar}
      message={message}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert
        onClose={handleCloseSnackBar}
        severity={type ? type : "success"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
