import styled from "styled-components";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useQuery } from "react-query";
import { AdminService } from "../../../api";
import { useState } from "react";
import { User } from "../../../types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Popconfirm } from "antd";
import InfoIcon from "@mui/icons-material/Info";
import { CustomSnackbar } from "../../../components/common";
import { AddAdminModal } from "../components/admins/AddAdminModal";
import { AdminInfoModal } from "../components/admins/AdminInfoModal";
import { set } from "lodash";
export const AdminsSection = () => {
  const [admins, setAdmins] = useState<User[]>([]);
  const [supports, setSupports] = useState<User[]>([]);
  const [snackbarInfo, setSnackbarInfo] = useState<
    { message: string; severity: "success" | "error" } | undefined
  >({
    message: "",
    severity: "success",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isAddAdminModalOpen, setIsAddAdminModalOpen] = useState(false);
  const [openAdminInfoModal, setOpenAdminInfoModal] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const fetchAdmins = useQuery(
    ["admins"],
    () => AdminService.getAdminsAndSupports(),
    {
      onSuccess: (data) => {
        setAdmins(data.filter((user) => user.roles.includes("ADMIN")));
        setSupports(data.filter((user) => !user.roles.includes("ADMIN")));
      },
      refetchOnWindowFocus: false,
    }
  );
  const handleDeleteSupport = async (id: number) => {
    try {
      await AdminService.deleteSupport(id);
      setSupports(supports.filter((support) => support.id !== id));
      setSnackbarInfo({
        message: "Support removed successfully",
        severity: "success",
      });
    } catch (e) {
      setSnackbarInfo({
        message: "Failed to remove support",
        severity: "error",
      });
    }
    setSnackbarOpen(true);
  };
  const handleAdd = async (userId: number, admin: boolean) => {
    setIsAddAdminModalOpen(false);
    try {
      {
        admin
          ? await AdminService.addAdmin(userId)
          : await AdminService.addSupport(userId);
      }
      fetchAdmins.refetch();
      setSnackbarInfo({
        message: "Admin added successfully",
        severity: "success",
      });
    } catch (e: any) {
      setSnackbarInfo({
        message: e?.response?.data?.errors[0] || "Failed to add admin",
        severity: "error",
      });
    }
    setSnackbarOpen(true);
  };
  const handleViewAdminInfo = (userToView: User) => {
    setOpenAdminInfoModal(true);
    setUser(userToView);
  };
  const handleSendEmail = async (id: number, Subject: string, text: string) => {
    setOpenAdminInfoModal(false);
    try {
      await AdminService.sendEmail(id, Subject, text);
      setSnackbarInfo({
        message: "Email sent successfully",
        severity: "success",
      });
    } catch (e: any) {
      setSnackbarInfo({
        message: e?.response?.data?.errors[0] || "Failed to send email",
        severity: "error",
      });
    }
    setSnackbarOpen(true);
  };
  return (
    <Container className="main">
      <CustomSnackbar
        isSnackbarOpen={snackbarOpen}
        setIsSnackbarOpen={setSnackbarOpen}
        message={snackbarInfo?.message || ""}
        type={snackbarInfo?.severity || "success"}
      />
      <AddAdminModal
        open={isAddAdminModalOpen}
        handleAdd={handleAdd}
        onClose={() => setIsAddAdminModalOpen(false)}
      />
      {user && (
        <AdminInfoModal
          open={openAdminInfoModal}
          onClose={() => setOpenAdminInfoModal(false)}
          user={user}
          handleSendEmail={handleSendEmail}
        />
      )}
      <div
        className="addNew"
        style={{
          boxShadow: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={() => setIsAddAdminModalOpen(true)}
      >
        <AddCircleIcon style={{ color: "green" }} />
        <h6>Add new</h6>
      </div>
      <ListContainer style={{ gridArea: "admins" }}>
        <h6>Admins</h6>
        <div className="user" style={{ backgroundColor: "rgb(242, 209, 165)" }}>
          <p>#</p>
          <p>name</p>
          <p>username</p>
        </div>
        {admins.map((admin, index) => (
          <div key={admin.id} className="user">
            <p>{index + 1}.</p>
            <p>{admin.firstName + " " + admin.lastName}</p>
            <p>{admin.username}</p>
            <p></p>
            <InfoIcon onClick={() => handleViewAdminInfo(admin)} />
          </div>
        ))}
      </ListContainer>
      <ListContainer style={{ gridArea: "supports" }}>
        <h6>Supports</h6>
        <div className="user" style={{ backgroundColor: "rgb(242, 209, 165)" }}>
          <p>#</p>
          <p>name</p>
          <p>username</p>
        </div>
        {supports.map((support, index) => (
          <div key={support.id} className="user">
            <p>{index + 1}.</p>
            <p>{support.firstName + " " + support.lastName}</p>
            <p>{support.username}</p>
            <InfoIcon onClick={() => handleViewAdminInfo(support)} />
            <Popconfirm
              title="Remove support"
              description="Are you sure to remove this support?"
              icon={<ErrorOutlineIcon style={{ color: "red" }} />}
              onConfirm={() => handleDeleteSupport(support.id)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteForeverIcon style={{ color: "red" }} />
            </Popconfirm>
          </div>
        ))}
      </ListContainer>
      <LogContainer></LogContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100% !important;
  max-height: 87vh;
  grid-template-columns: 1fr 1fr 1.5fr;
  grid-template-rows: 1fr 10fr;
  grid-template-areas:
    "addNew none none"
    "admins supports log";
  .addNew {
    grid-area: addNew;
    align-items: center;
    gap: 0.5rem;
    h6 {
      margin: 0;
      color: ${({ theme }) => theme.colors.secondary_dark};
    }
    svg {
      font-size: 1.7rem;
      color: ${({ theme }) => theme.colors.success};
    }
  }
`;

const ListContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary_light};
  .user {
    width: 100%;
    display: grid;
    padding: 0.2rem;
    grid-template-columns: 0.2fr 1fr 1fr 0.2fr 0.2fr;
  }
  h6 {
    width: 100%;
    font-weight: 700;
    font-size: 1.2rem;
    text-align: center;
    font-family: "Overlock", sans-serif;
  }
  svg {
    cursor: pointer;
  }
`;

const LogContainer = styled.div`
  grid-area: log;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`;
