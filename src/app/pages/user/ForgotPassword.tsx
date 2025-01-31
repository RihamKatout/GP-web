import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { ButtonContainer, LinkToRegister, MainContainer, StyledButton, StyledForgotPasswordContainer, StyledInput, StyledLink, WelcomeText } from "../../features/authentication/StyledComponents";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
const schema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormFields = z.infer<typeof schema>;

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormFields>({
    defaultValues: { email: "" },
    resolver: zodResolver(schema),
  });

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    // Mock sending reset email
    setTimeout(() => {
      messageApi.success(
        `A password reset link has been sent to ${data.email}. (Simulated)`
      );
      //navigate("/login");
    }, 1000);

    const onForgotPassword = (email: string) => {
      // EmailJS Password Reset Email Configuration
      const templateParams = {
        user_email: email,
        reset_link: "http://localhost:5173/forgot-password", // Change to your password reset page URL
      };

      // Send the email using EmailJS
      emailjs
        .send(
          "service_9el3gcf",
          "template_tjxhrls",
          templateParams,
          "3utpEi5L2w2bw-lZn"
        )
        .then(
          (response: any) => {
            console.log("Password reset email sent:", response);
            messageApi.success("Password reset link sent! Check your email.");
            navigate("/forgot-password"); // Redirect to reset password page
          },
          (error: any) => {
            console.log("Failed to send email:", error);
            messageApi.error(
              "Failed to send password reset email. Please try again."
            );
          }
        );
    };
  };

  return (
    <PageContainer>
    <MainContainer>
      {contextHolder}
      <WelcomeText>Reset</WelcomeText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <StyledInput {...register("email")} placeholder="Enter your email" />
        </InputContainer>
        <ButtonContainer>
        <StyledButton onClick={() => navigate("/")} style={{ width: "25%" }}>
            <HomeRoundedIcon style={{ fontSize: "2rem" }} />
          </StyledButton>
          <StyledButton type="submit" disabled={isSubmitting}>
            Send Reset Link
          </StyledButton>
        </ButtonContainer>
      </form>
      <LinkToRegister>
              Don't have an account?{" "}
              <StyledLink to="/register">Create one</StyledLink>
              <StyledForgotPasswordContainer>
                <StyledLink to="#" onClick={() => navigate("/login")}>
                  Go Back to Login?
                </StyledLink>
              </StyledForgotPasswordContainer>
            </LinkToRegister>
    </MainContainer>
    </PageContainer>
  );
};

// Styled Components (reuse from LoginForm)
///////// Styled Components /////////
const PageContainer = styled.div`
  gap: 4rem;
  width: 100vw;
  display: flex;
  padding: 2rem;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
// const StyledInput = styled.input`
//   background: #f0f4ff;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//   border-radius: 50px;
//   width: 85%;
//   height: 3.5rem;
//   padding: 0 1.5rem;
//   border: none;
//   outline: none;
//   color: #3c354e;
//   font-size: 1rem;
//   font-weight: 500;
//   margin: 1.5rem 0;
//   &:focus {
//     box-shadow: 0px 0px 8px #a3b8ff;
//   }
//   &::placeholder {
//     color: #b3b3b3;
//     font-size: 0.9rem;
//   }
// `;

// const StyledButton = styled.button`
//   background: linear-gradient(135deg, rgb(216, 249, 225), rgb(245, 213, 241));
//   color: #191818;
//   text-transform: uppercase;
//   letter-spacing: 0.15rem;
//   width: 70%;
//   height: 3.5rem;
//   border: none;
//   border-radius: 50px;
//   cursor: pointer;
//   font-size: 1rem;
//   font-weight: bold;
//   //margin-top: 1.5rem;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//   transition: transform 0.2s, box-shadow 0.2s;
//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
//   }
// `;


// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
//   height: 550px;
//   width: 400px;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 2px 10px 30px rgba(7, 7, 7, 0.1);
//   border-radius: 20px;
//   backdrop-filter: blur(8.5px);
//   -webkit-backdrop-filter: blur(8.5px);
// `;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   margin: 1.5rem 0;
// `;
// const LinkToRegister = styled.div`
//   margin-top: 1rem;
//   font-size: 0.9rem;
//   color: #555;
// `;

// const StyledLink = styled(Link)`
//   color: #ffc2af;
//   text-decoration: none;
//   font-weight: bold;
//   &:hover {
//     text-decoration: underline;
//   }
// `;
// const BakeHomeButton = styled.button`
//   background: #ffe4d4;
//   color: #191818d3;
//   font-size: 1rem;
//   font-weight: bold;
//   margin-top: 1rem;
//   padding: 0.8rem 1.5rem;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   &:hover {
//     background: #ff8a65;
//     transform: scale(1.05);
//   }
// `;
// const StyledForgotPasswordContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   width: 85%;
//   margin-top: -10px;
//   margin-bottom: 10px;
// `;
