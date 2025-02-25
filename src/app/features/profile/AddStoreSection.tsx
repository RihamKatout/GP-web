import { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddStoreDto,
  AddStoreValidation,
  Category,
  ProfileSectionsEnum,
} from "../../types";
import { StoreCategoryService } from "../../api/categoryService";
import { StoreService } from "../../api";
import { CustomSnackbar } from "../../components/common/CustomSnackbar";
import { ImageUploader } from "../../components/specificComponents/ImageUploader";

// TODO: add image uploader for logo and cover images
interface SnackbarNotification {
  message: string;
  type: "success" | "error";
}
interface ProfileInfoSectionProps {
  setSelectedSection: (section: ProfileSectionsEnum) => void;
}
export const AddStoreSection: React.FC<ProfileInfoSectionProps> = ({
  setSelectedSection,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [notification, setNotification] = useState<SnackbarNotification>({
    message: "",
    type: "success",
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await StoreCategoryService.getStoreCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<AddStoreDto>({
    resolver: zodResolver(AddStoreValidation),
  });

  const onSubmit: SubmitHandler<AddStoreDto> = async (data) => {
    try {
      const response = await StoreService.addStore(data, logoFile, coverFile);
      setNotification({
        message: "Store created successfully!",
        type: "success",
      });
      setIsSnackbarOpen(true);
      setTimeout(() => {
        setSelectedSection(ProfileSectionsEnum.MyStores);
      }, 500);
    } catch (error) {
      console.error("Error creating store:", error);
      setNotification({
        message: "Failed to create store. Please try again.",
        type: "error",
      });
      setIsSnackbarOpen(true);
    }
  };

  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <WelcomeText>Create New Store</WelcomeText>
        <InputWrapper>
          <StyledInput
            {...register("name")}
            placeholder="Store Name"
            isError={!!errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register("description")}
            placeholder="Description"
            isError={!!errors.description}
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </InputWrapper>

        {/* <InputWrapper>
          <StyledInput
            {...register("logoURL")}
            placeholder="Logo URL"
            isError={!!errors.logoURL && !!watch("logoURL")}
          />
          {errors.logoURL && watch("logoURL") && (
            <ErrorMessage>{errors.logoURL.message}</ErrorMessage>
          )}
        </InputWrapper>

        <InputWrapper>
          <StyledInput
            {...register("coverURL")}
            placeholder="Cover URL"
            isError={!!errors.coverURL && !!watch("coverURL")}
          />
          {errors.coverURL && watch("coverURL") && (
            <ErrorMessage>{errors.coverURL.message}</ErrorMessage>
          )}
        </InputWrapper> */}
        <InputWrapper>
          <StyledSelect
            {...register("categoryId", { valueAsNumber: true })}
            isError={!!errors.categoryId}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </StyledSelect>
          {errors.categoryId && (
            <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
          )}
        </InputWrapper>

        {errors.root && <ErrorMessage>{errors.root.message}</ErrorMessage>}

        <ButtonContainer>
          <StyledButton type="submit" disabled={isSubmitting}>
            Create Store
          </StyledButton>
        </ButtonContainer>
      </FormContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <ImageUploader imageName="Logo" setFinalImage={setLogoFile} />
        <ImageUploader imageName="Cover" setFinalImage={setCoverFile} />
      </div>
      <CustomSnackbar
        message={notification.message}
        isSnackbarOpen={isSnackbarOpen}
        setIsSnackbarOpen={setIsSnackbarOpen}
        type={notification.type}
      />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
`;

const WelcomeText = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: left;
  font-family: "Overlock", sans-serif;
  font-weight: 700;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StyledInput = styled.input<{ isError?: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${(props) => (props.isError ? "#dc3545" : "#ddd")};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.isError ? "#dc3545" : "#007bff")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.isError ? "rgba(220, 53, 69, 0.25)" : "rgba(0, 123, 255, 0.25)"};
  }
`;

const StyledSelect = styled.select<{ isError?: boolean }>`
  padding: 0.8rem;
  border: 1px solid ${(props) => (props.isError ? "#dc3545" : "#ddd")};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.isError ? "#dc3545" : "#007bff")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.isError ? "rgba(220, 53, 69, 0.25)" : "rgba(0, 123, 255, 0.25)"};
  }
`;

const ErrorMessage = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: -0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
