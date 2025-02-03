import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import {
  ButtonContainer,
  FormContainer,
  LinkToRegister,
  MainContainer,
  StyledButton,
  StyledForgotPasswordContainer,
  StyledInput,
  StyledLink,
  WelcomeText,
} from "../../features/authentication/StyledComponents";
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
    setTimeout(() => {
      messageApi.success(
        `A password reset link has been sent to ${data.email}. (Simulated)`
      );
    }, 1000);

    const onForgotPassword = (email: string) => {
      const templateParams = {
        user_email: email,
        reset_link: "http://localhost:5173/forgot-password",
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
          () => {
            messageApi.success("Password reset link sent! Check your email.");
            navigate("/forgot-password");
          },
          () => {
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
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <StyledInput
              {...register("email")}
              placeholder="Enter your email"
            />
          </InputContainer>
          <ButtonContainer>
            <StyledButton
              onClick={() => navigate("/")}
              style={{ width: "25%" }}
            >
              <HomeRoundedIcon style={{ fontSize: "2rem" }} />
            </StyledButton>
            <StyledButton type="submit" disabled={isSubmitting}>
              Send Reset Link
            </StyledButton>
          </ButtonContainer>
        </FormContainer>
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
