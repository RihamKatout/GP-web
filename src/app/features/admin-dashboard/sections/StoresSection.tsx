import styled from "styled-components";
import { DashboardCard } from "../../store-manager/dashboard/components/StyledComponents";
import StoreIcon from "@mui/icons-material/Store";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BlockIcon from "@mui/icons-material/Block";
import { Category, Store, StoreStatusEnum } from "../../../types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AdminService, StoreCategoryService } from "../../../api";
import { Popconfirm } from "antd";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { CustomSnackbar } from "../../../components/common";
import CategoryIcon from "@mui/icons-material/Category";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { DefaultCategoryIcon } from "../../../../assets";
import { AddStoreCategoryModal } from "../components/AddStoreCategoryModal";
import { set } from "firebase/database";

// TODO: handle delete store
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
  const [storeCategories, setStoreCategories] = useState<Category[]>([]);
  const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [editInfo, setEditInfo] = useState<{
    categoryId: number;
    categoryNameToEdit: string;
  }>({
    categoryId: 0,
    categoryNameToEdit: "",
  });
  useQuery(["stores"], () => AdminService.getAllStores(), {
    onSuccess: (data) => {
      setStores(data);
    },
    refetchOnWindowFocus: false,
  });

  const fetchCategories = useQuery(
    ["storeCategories"],
    () => StoreCategoryService.getStoreCategories(),
    {
      onSuccess: (data) => {
        setStoreCategories(data);
      },
      refetchOnWindowFocus: false,
    }
  );

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
    } catch (e) {
      setSnackbarMessage({
        message: "Failed to activate store",
        type: "error",
      });
      setSnackbarOpen(true);
    }
  };

  const handleDeleteCategory = async (categoryId: number) => {
    try {
      await StoreCategoryService.deleteStoreCategory(categoryId);
      setSnackbarMessage({
        message: "Category deleted successfully",
        type: "success",
      });
      setSnackbarOpen(true);
      setStoreCategories((prev) => {
        return prev.filter((category) => category.id !== categoryId);
      });
      setStores((prev) => {
        return prev.map((store) => {
          if (store.storeCategoryId === categoryId) {
            return { ...store, storeCategoryId: 1 };
          }
          return store;
        });
      });
    } catch (e) {
      setSnackbarMessage({
        message: "Failed to delete category",
        type: "error",
      });
      setSnackbarOpen(true);
    }
  };

  const handleAddCategory = async (
    id: number,
    name: string,
    imageurl: string
  ) => {
    const response = await StoreCategoryService.addStoreCategory(
      name,
      imageurl
    );

    if (!response.success) {
      setSnackbarMessage({
        message: response.error,
        type: "error",
      });
    } else {
      await fetchCategories.refetch();
      setSnackbarMessage({
        message: "Category added successfully",
        type: "success",
      });
      setOpenAddCategoryModal(false);
    }
    setSnackbarOpen(true);
  };

  const handleEditCategory = async (
    id: number,
    name: string,
    imageurl: string
  ) => {
    const response = await StoreCategoryService.editStoreCategory(
      id,
      name,
      imageurl
    );
    if (!response.success) {
      setSnackbarMessage({
        message: response.error,
        type: "error",
      });
    } else {
      await fetchCategories.refetch();
      setSnackbarMessage({
        message: "Category updated successfully",
        type: "success",
      });
      setOpenEditCategoryModal(false);
    }
    setSnackbarOpen(true);
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
      <AddStoreCategoryModal
        open={openAddCategoryModal}
        onClose={() => setOpenAddCategoryModal(false)}
        actionHandler={handleAddCategory}
        type="add"
      />

      <AddStoreCategoryModal
        open={openEditCategoryModal}
        onClose={() => setOpenEditCategoryModal(false)}
        actionHandler={handleEditCategory}
        type="edit"
        editInfo={editInfo}
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

      {/* categories */}
      <DashboardCard style={{ gridArea: "card4" }}>
        <CategoryIcon />
        <div>
          <h6>Store categories</h6>
          <p>{storeCategories.length}</p>
        </div>
      </DashboardCard>
      <div
        className="addStoreCategory"
        style={{
          boxShadow: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={() => setOpenAddCategoryModal(true)}
      >
        <AddCircleIcon style={{ color: "green" }} />
        <h6>Add store category</h6>
      </div>
      <StoresByCategoriesChart />
      <NewCategoryRequests />
      <StoreCategoriesConyainer>
        <p>store categories</p>
        <div
          className="category"
          style={{
            backgroundColor: "rgba(255, 140, 0, 0.3)",
          }}
        >
          <p>#</p>
          <p className="cat-name">icon</p>
          <p className="cat-name">name</p>
          <p>stores</p>
        </div>
        {storeCategories.map((category, index) => (
          <div className="category" key={category.id}>
            <p>{index + 1}.</p>
            <img src={category.imageurl || DefaultCategoryIcon} alt="" />
            <p className="cat-name">{category.name}</p>
            <p>
              {
                // get number of stores in this category
                stores.filter((store) => store.storeCategoryId === category.id)
                  .length
              }
            </p>
            <EditIcon
              style={{ color: "gray" }}
              onClick={() => {
                setEditInfo({
                  categoryId: category.id,
                  categoryNameToEdit: category.name,
                });
                setOpenEditCategoryModal(true);
              }}
            />
            <Popconfirm
              title="Delete product"
              description="Are you sure to delete this product?"
              icon={<ErrorOutlineIcon style={{ color: "red" }} />}
              onConfirm={() => handleDeleteCategory(category.id)}
              okText="Yes"
              cancelText="No"
            >
              <DeleteForeverIcon style={{ color: "red" }} />
            </Popconfirm>
          </div>
        ))}
      </StoreCategoriesConyainer>
    </Container>
  );
};
const Container = styled.div`
  max-height: 87vh;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 3.5fr 3.5fr;
  grid-template-areas:
    "card1 card2 card3  card4 addStoreCategory none"
    "stores stores stores chart chart requests"
    "stores stores stores categories categories categories";
  .addStoreCategory {
    grid-area: addStoreCategory;
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

const StoresByCategoriesChart = styled.div`
  grid-area: chart;
`;

const NewCategoryRequests = styled.div`
  grid-area: requests;
`;
const StoreCategoriesConyainer = styled.div`
  grid-area: categories;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  p {
    width: 100%;
    text-align: center;
  }
  .category {
    gap: 0.5rem;
    padding: 0.2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 0.2fr 0.5fr 2fr 1fr 0.2fr 0.2fr;
    .cat-name {
      text-align: left;
    }
    svg {
      cursor: pointer;
      font-size: 1.4rem;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
