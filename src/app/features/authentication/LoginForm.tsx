import { useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { message } from "antd";
import { useAuth } from "../../context/AuthContext";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {
  MainContainer,
  WelcomeText,
  FormContainer,
  StyledInput,
  ButtonContainer,
  StyledButton,
  LinkToRegister,
  StyledLink,
  StyledForgotPasswordContainer,
} from "./StyledComponents";
const LoginForm = () => {
  const { loginUserContext } = useAuth();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      await loginUserContext(data);
      navigate(location.state?.from || "/", { state: { showWelcome: true } });
      setTimeout(() => {}, 100);
    } catch (error: any) {
      setError("root", {
        message: "Invalid email or password, please try again!",
      });
      messageApi.error("Invalid email or password, please try again!");
    }
  };

  return (
    <MainContainer>
      {contextHolder}
      <WelcomeText>Login</WelcomeText>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledInput {...register("email")} placeholder="Email" />
        <StyledInput
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <ButtonContainer>
          <StyledButton onClick={() => navigate("/")} style={{ width: "25%" }}>
            <HomeRoundedIcon style={{ fontSize: "2rem" }} />
          </StyledButton>
          <StyledButton type="submit" disabled={isSubmitting}>
            Login
          </StyledButton>
        </ButtonContainer>
      </FormContainer>
      <LinkToRegister>
        Don't have an account?{" "}
        <StyledLink to="/register">Create one</StyledLink>
        <StyledForgotPasswordContainer>
          <StyledLink to="#" onClick={() => navigate("/forgot-password")}>
            Forgot your password?
          </StyledLink>
        </StyledForgotPasswordContainer>
      </LinkToRegister>
    </MainContainer>
  );
};

export default LoginForm;
