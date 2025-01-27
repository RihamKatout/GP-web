import styled from "styled-components";
import { DashboardCard } from "../../store-manager/dashboard/components/StyledComponents";
import StoreIcon from "@mui/icons-material/Store";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BlockIcon from "@mui/icons-material/Block";
import { Store, StoreStatusEnum } from "../../../types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AdminService } from "../../../api";
import { Popconfirm } from "antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CustomSnackbar } from "../../../components/common";

// TODO: handle delete and acticate store

export const StoresSection = () => {
  const [stores, setStores] = useState<Store[]>([]);
  // true = under review, false = banned
  const [statusToDisplay, setStatusToDisplay] = useState(true);
  const [bannedStores, setBannedStores] = useState<Store[]>([]);
  const [storesToDisplay, setStoresToDisplay] = useState<Store[]>([]);
  const [underReviewStores, setUnderReviewStores] = useState<Store[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>({ message: "", type: "success" });
  // get stores
  useQuery(["stores"], () => AdminService.getAllStores(), {
    onSuccess: (data) => {
      setStores(data);
    },
    refetchOnWindowFocus: false,
  });

  const handleStatusToDisplayChange = (status: boolean) => {
    setStatusToDisplay(status);
  };

  const handleOpenStore = (storeId: number) => {
    console.log("Open store with id: ", storeId);
  };
  const handleActivateStore = async (storeId: number) => {
    try {
      await AdminService.activateStore(storeId);
      setStores((prevStores) => {
        const updatedStores = prevStores.map((store) => {
          if (store.id === storeId) {
            return { ...store, status: StoreStatusEnum.ACTIVE };
          }
          return store;
        });
        return updatedStores;
      });
      setSnackbarMessage({
        message: "Store activated successfully",
        type: "success",
      });
      setSnackbarOpen(true);
    } catch (e) {}
  };

  useEffect(() => {
    setStoresToDisplay(statusToDisplay ? underReviewStores : bannedStores);
  }, [statusToDisplay, underReviewStores, bannedStores]);

  useEffect(() => {
    setBannedStores(
      stores.filter((store) => store.status === StoreStatusEnum.BANNED)
    );
    setUnderReviewStores(
      stores.filter((store) => store.status === StoreStatusEnum.UNDER_REVIEW)
    );
  }, [stores]);
  return (
    <Container className="main">
      <CustomSnackbar
        isSnackbarOpen={snackbarOpen}
        setIsSnackbarOpen={setSnackbarOpen}
        message={snackbarMessage.message}
        type={snackbarMessage.type}
      />
      <DashboardCard style={{ gridArea: "card1" }}>
        <StoreIcon />
        <div>
          <h6>Active stores</h6>
          <p>
            {
              stores.filter((store) => store.status === StoreStatusEnum.ACTIVE)
                .length
            }
          </p>
        </div>
      </DashboardCard>
      <DashboardCard style={{ gridArea: "card2" }}>
        <RemoveRedEyeIcon />
        <div>
          <h6>Under review</h6>
          <p>{underReviewStores.length}</p>
        </div>
      </DashboardCard>
      <DashboardCard style={{ gridArea: "card3" }}>
        <BlockIcon />
        <div>
          <h6>Banned stores</h6>
          <p>{bannedStores.length}</p>
        </div>
      </DashboardCard>
      <StoresContainer>
        <div className="stores-header">
          <button
            style={{
              backgroundColor: statusToDisplay ? "orange" : "transparent",
              fontWeight: statusToDisplay ? "bold" : "normal",
              borderColor: !statusToDisplay ? "orange" : "transparent",
            }}
            onClick={() => handleStatusToDisplayChange(true)}
          >
            Under review ({underReviewStores.length})
          </button>
          <button
            style={{
              backgroundColor: statusToDisplay ? "transparent" : "orange",
              fontWeight: !statusToDisplay ? "bold" : "normal",
              borderColor: statusToDisplay ? "orange" : "transparent",
            }}
            onClick={() => handleStatusToDisplayChange(false)}
          >
            Banned ({bannedStores.length})
          </button>
        </div>
        <div className="stores-list">
          <div
            className="store"
            style={{
              fontSize: "0.9rem",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              padding: "0.2rem",
            }}
          >
            <p>#</p>
            <p>Name</p>
            <p style={{ marginLeft: "-0.5rem" }}>Creation date</p>
          </div>

          {storesToDisplay.map((store, index) => (
            <div key={store.id} className="store">
              <span>{index + 1}.</span>
              <p
                className="storeName"
                onClick={() => handleOpenStore(store.id)}
              >
                {store.name}
              </p>
              <p>
                {store?.creationDate instanceof Date
                  ? store.creationDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                  : typeof store?.creationDate === "string"
                  ? (store.creationDate as string).split("T")[0]
                  : "1/1/0000"}
              </p>
              <button className="delete">delete</button>

              <Popconfirm
                title="Activate store"
                description="Are you sure to activate this store?"
                icon={<ErrorOutlineIcon style={{ color: "green" }} />}
                onConfirm={() => handleActivateStore(store.id)}
                okText="Yes"
                cancelText="No"
              >
                <button className="activate">Activate</button>
              </Popconfirm>
            </div>
          ))}
        </div>
      </StoresContainer>
    </Container>
  );
};
const Container = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  grid-template-rows: 1fr 3.5fr 3.5fr;
  grid-template-areas:
    "card1 card2 card3 none none"
    "stores stores stores stores lowStock"
    "stores stores stores stores topStores";
  .addProduct {
    grid-area: addProduct;
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
  .category-filter {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 0.5rem;
    p {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const StoresContainer = styled.div`
  display: flex;
  grid-area: stores;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .stores-header {
    width: 100%;
    gap: 0.5rem;
    display: flex;
    margin-bottom: 0.5rem;
    justify-content: flex-start;
    button {
      font-size: 0.8rem;
      border-radius: 0.5rem;
      padding: 0.3rem 0.5rem;
      border: ${({ theme }) => "2px solid " + theme.colors.orange};
    }
  }

  .stores-list {
    width: 100%;
    height: 100%;
    max-height: 70vh;
    overflow-y: scroll;
    .store {
      display: grid;
      grid-template-columns: 0.2fr 3fr 2fr 0.5fr 0.5fr;
      gap: 0.5rem;
      grid-template-rows: 1fr;
      width: 100%;
      align-items: center;
      padding: 0.5rem 0.2rem;
      span {
        color: ${({ theme }) => theme.colors.black};
        font-weight: bold;
        margin-right: 0.5rem;
      }
      .storeName {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      button {
        border: none;
        font-size: 0.9rem;
        border-radius: 0.5rem;
        padding: 0.2rem 0.5rem;
        font-weight: bold;
        font-family: "Overlock", sans-serif;
        background-color: ${({ theme }) => theme.colors.orange};
      }
      .activate {
        background-color: ${({ theme }) => theme.colors.success};
      }
      .delete {
        background-color: ${({ theme }) => theme.colors.lightGray};
      }
    }
  }
`;
