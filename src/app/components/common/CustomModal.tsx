import { Modal, Box } from "@mui/material";
import { display } from "html2canvas/dist/types/css/property-descriptors/display";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CustomModal = ({ open, onClose, children }: CustomModalProps) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box component="div" sx={style}>
        {children}
      </Box>
    </Modal>
  );
};
