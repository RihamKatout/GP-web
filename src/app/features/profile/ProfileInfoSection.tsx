import styled from "styled-components";
import { useAuth } from "../../context";
import { RihamImg } from "../../../assets";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Divider } from "@mui/material";
import { ProfileSectionsEnum } from "../../types";
import React from "react";

interface ProfileInfoSectionProps {
  setSelectedSection: (section: ProfileSectionsEnum) => void;
}
export const ProfileInfoSection: React.FC<ProfileInfoSectionProps> = ({
  setSelectedSection,
}) => {
  const { user } = useAuth();
  const status = user?.enabled ? "Active" : "Inactive";
  return (
    <Container isActive={user?.enabled || false}>
      <div className="profile_info_wrapper">
        <div className="user_main_info">
          <img src={user?.userImageURL || RihamImg} alt="User Avatar" />
          <div className="username">
            <h2>
              {user?.firstName} {user?.lastName}
            </h2>
            <p>@{user?.username}</p>
            <p>location: Nablus, Palestine</p>
          </div>
          <label>{status}</label>
        </div>

        <Divider style={{ backgroundColor: "black" }} />

        <div className="documentation">
          <h4>Documentation</h4>
          <p>
            <ClearIcon /> Personal ID
          </p>
          <p>
            <CheckIcon /> Email Address
          </p>
          <p>
            <ClearIcon /> Phone number
          </p>
        </div>
      </div>
      <OwnStoreContainer>
        <h4>Want to have your own store?</h4>
        <button
          onClick={() => setSelectedSection(ProfileSectionsEnum.AddStore)}
        >
          Join us
        </button>
        <DotLottieReact
          src="https://lottie.host/4bc5680f-e780-4cb6-8a67-5f3efe8a95a0/kG3JD7ugnD.lottie"
          loop
          autoplay
          style={{ marginTop: "-5rem", width: "90%", height: "90%" }}
        />
      </OwnStoreContainer>
    </Container>
  );
};

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray_light};
  p {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  img {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    object-fit: cover;
    @media (max-width: 760px) {
      width: 20vw;
      height: 20vw;
    }
  }
  .profile_info_wrapper {
    width: 50%;
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.17);
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  .user_main_info {
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 2rem;
    justify-content: centert;
    align-items: center;
    padding: 1.5rem;
    @media (max-width: 760px) {
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  }
  .username {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    h2 {
      font-family: "Delius", serif;
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 1.2rem;
    }
    @media (max-width: 1000px) {
      gap: 0.2rem;
    }
    @media (max-width: 760px) {
      align-items: center;
      text-align: center;
    }
  }
  label {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin-left: auto;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.success : theme.colors.danger};
    @media (max-width: 760px) {
      margin: 0;
      width: 100%;
    }
  }
  .documentation {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    height: fit-content;
    h4 {
      font-family: "Delius", serif;
      font-weight: 700;
      margin: 0;
    }
    p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.5rem 0;
      color: ${({ theme }) => theme.colors.gray};
      svg {
        color: ${({ theme }) => theme.colors.primary_dark};
      }
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

const OwnStoreContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem;
  h4 {
    font-size: 2rem;
    font-family: "DynaPuff", serif;
    font-weight: 600;
    margin: 0;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-top: 1rem;
  }
  button {
    color: ${({ theme }) => theme.colors.tan_dark};
    background-color: transparent;
    border: none;
    font-family: "Delius", serif;
    font-weight: 700;
    font-size: 2rem;
    z-index: 1;
  }
`;
