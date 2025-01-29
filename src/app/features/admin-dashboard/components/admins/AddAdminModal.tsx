import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../../components/common";
import styled from "styled-components";
import { UserService } from "../../../../api";
import { useForm } from "react-hook-form";
import { User } from "../../../../types";
import { useDebounce } from "../../../../hooks/useDebounce";

interface AddAdminModalProps {
  open: boolean;
  onClose: () => void;
  handleAdd: (userId: number, admin: boolean) => void;
}
export const AddAdminModal: React.FC<AddAdminModalProps> = ({
  open,
  onClose,
  handleAdd: handleAddAdmin,
}) => {
  const { register, watch, reset } = useForm();
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const searchKeyword = watch("search");
  const debouncedSearch = useDebounce(searchKeyword, 300);
  const [addAdmin, setAddAdmin] = useState(true);

  const handleSearch = async (search: string) => {
    if (!search) {
      setSearchResults([]);
      return;
    }
    try {
      const response = await UserService.searchForUsers(search);
      setSearchResults(response);
    } catch (error) {
      console.error("Search failed", error);
      setSearchResults([]);
    }
  };

  useEffect(() => {
    reset({ search: "" });
    setSearchResults([]);
    setSelectedUser(null);
    setAddAdmin(true);
  }, [open, reset]);

  useEffect(() => {
    if (debouncedSearch) {
      handleSearch(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <CustomModal open={open} onClose={onClose}>
      <Container>
        <h6>Add new admin or support</h6>
        <RoleContainer>
          <button
            className={addAdmin ? "active" : ""}
            onClick={() => setAddAdmin(true)}
          >
            Admin
          </button>
          <button
            className={!addAdmin ? "active" : ""}
            onClick={() => setAddAdmin(false)}
          >
            support
          </button>
        </RoleContainer>
        <input
          type="text"
          className="p-2 border rounded-md"
          placeholder="Search users by username or first name"
          style={{ width: "300px" }}
          {...register("search")}
        />

        <SearchResults>
          {searchResults.map((user) => (
            <SearchResultItem
              key={user.id}
              onClick={() => setSelectedUser(user)}
              selected={selectedUser?.id === user.id}
            >
              <span>
                {user.firstName} {user.lastName}
              </span>
              <span>{user.username}</span>
            </SearchResultItem>
          ))}
        </SearchResults>

        <p>
          Selected user:{" "}
          {selectedUser
            ? selectedUser?.firstName + " " + selectedUser?.lastName
            : "None"}
        </p>
        <ButtonsContainer>
          <button onClick={onClose}>Cancel</button>

          <button
            disabled={!selectedUser}
            onClick={() =>
              selectedUser && handleAddAdmin(selectedUser.id, addAdmin)
            }
          >
            Add
          </button>
        </ButtonsContainer>
      </Container>
    </CustomModal>
  );
};

const Container = styled.div`
  gap: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  h6 {
    margin-bottom: 1rem;
  }
  p {
    margin: 0;
  }
`;

const ButtonsContainer = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  button {
    width: 50%;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border- radius: 5px;
    padding: 0.5rem 1rem;
  }
  button:nth-child(1) {
    background-color: #ccc;
  }
  button:nth-child(2) {
    background-color: ${(props) => props.theme.colors.orange};
    color: white;
  }
`;

const SearchResults = styled.div`
  height: 200px;
  overflow-y: auto;
  background-color: ${(props) => props.theme.colors.gray_light};
`;

const SearchResultItem = styled.div<{ selected?: boolean }>`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.lightOrange : "transparent"};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const RoleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray_light};
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }
  .active {
    color: white;
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
