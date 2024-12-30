import z from "zod";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { message } from "antd"; // Import Ant Design's message

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const { loginUserContext } = useAuth();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage(); // Initialize message

  const {
    register,
    handleSubmit,
    setError,
    
    formState: { isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  // Handle invalid inputs before submit
  const onInvalid = (errors: FieldErrors<FormFields>) => {
    if (errors.email) {
      messageApi.error(errors.email.message || "Invalid email address");
    }
    if (errors.password) {
      messageApi.error(
        errors.password.message || "Password must be at least 8 characters long"
      );
    }
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await loginUserContext(data);
      messageApi.success("Login successful! Redirecting...");
      navigate("/");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.data.errors[0] === "Bad credentials") {
        setError("root", {
          message: "Invalid email or password, please try again!",
        });
        messageApi.error("Invalid email or password, please try again!");
      } else {
        setError("root", { message: error.response?.data.errors[0] });
        messageApi.error(error.response?.data.errors[0] || "An error occurred");
      }
    }
  };

  return (
    <>
      {contextHolder}
      <MainContainer>
        <WelcomeText>Login</WelcomeText>
        <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
          <InputContainer>
            <StyledInput {...register("email")} placeholder="Email" />
           
            <StyledInput
              {...register("password")}
              type="password"
              placeholder="Password"
            />
           
          </InputContainer>
          <ButtonContainer>
            <StyledButton type="submit" disabled={isSubmitting}>
              Login
            </StyledButton>
          </ButtonContainer>
        </form>
         {/* Create Account link */}
         <LinkToRegister>
          Don't have an account? <StyledLink to="/register">Create one</StyledLink>
        </LinkToRegister>
      </MainContainer>
    </>
  );
};

export default LoginForm;

///////// Styled Components /////////
const StyledInput = styled.input`
  background: #f0f4ff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  width: 85%;
  height: 3.5rem;
  padding: 0 1.5rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: 500;
  margin: 1.5rem 0;
  &:focus {
    box-shadow: 0px 0px 8px #a3b8ff;
  }
  &::placeholder {
    color: #b3b3b3;
    font-size: 0.9rem;
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(135deg, rgb(216, 249, 225), rgb(245, 213, 241));
  color: #191818;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  width: 70%;
  height: 3.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.25);
  }
`;

const WelcomeText = styled.h2`
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
  color: #eb977d;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 400px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 2px 10px 30px rgba(7, 7, 7, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1.5rem 0;
`;
const LinkToRegister = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
`;

const StyledLink = styled(Link)`
  color: #ffc2af;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;