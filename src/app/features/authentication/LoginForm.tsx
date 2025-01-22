import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";
import { message } from "antd";
import { useAuth } from "../../context/AuthContext";
import emailjs from "emailjs-com"; // Import EmailJS
import home from "../../../assets/home.png";
const LoginForm = () => {
  const { loginUserContext } = useAuth();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation();
  const { register, handleSubmit, setError, formState: { isSubmitting } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      await loginUserContext(data);
      messageApi.success("Login successful! Redirecting...");
      navigate(location.state?.from || "/");
    } catch (error: any) {
      setError("root", {
        message: "Invalid email or password, please try again!",
      });
      messageApi.error("Invalid email or password, please try again!");
    }
  };

  const onForgotPassword = (email: string) => {
    // EmailJS Password Reset Email Configuration
    const templateParams = {
      user_email: email,
      reset_link: "http://localhost:5173/forgot-password", // Change to your password reset page URL
    };

    // Send the email using EmailJS
    emailjs
      .send("service_9el3gcf", "template_tjxhrls", templateParams, "3utpEi5L2w2bw-lZn")
      .then(
        (response: any) => {
          console.log("Password reset email sent:", response);
          messageApi.success("Password reset link sent! Check your email.");
          navigate("/forgot-password"); // Redirect to reset password page
        },
        (error: any) => {
          console.log("Failed to send email:", error);
          messageApi.error("Failed to send password reset email. Please try again.");
        }
      );
  };

  return (
    <>
      {contextHolder}
      <MainContainer>
        <WelcomeText>Login</WelcomeText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <StyledInput {...register("email")} placeholder="Email" />
            {/* <StyledForgotPasswordContainer>
              <StyledLink to="#" onClick={() => onForgotPassword("user@example.com")}>
                Forgot your password?
              </StyledLink>
            </StyledForgotPasswordContainer> */}
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
        <BakeHomeButton onClick={() => navigate("/")} ><img src={home} style={{ width: "25px", height: "25px" }} /></BakeHomeButton>
        <LinkToRegister>
          Don't have an account? <StyledLink to="/register">Create one</StyledLink>
          <StyledForgotPasswordContainer>
              <StyledLink to="#" onClick={() => onForgotPassword("user@example.com")}>
                Forgot your password?
              </StyledLink>
            </StyledForgotPasswordContainer>
        </LinkToRegister>
      </MainContainer>
    </>
  );
};

export default LoginForm;

// Styled Components

const StyledForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin-top: 5px;
  margin-bottom: 10px;
`;

// Other Styled Components...


///////// Styled Components /////////
const StyledInput = styled.input`
  background: #f0f4ff;
  box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5);
  border:1px solid rgba(217, 217, 217, 0.5);
  border-radius: 10px;
  width: 85%;
  height: 3.5rem;
  padding: 0 1.5rem;//border: none;
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
  
  color: #191818;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  width: 70%;
  height: 3.5rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Delius Swash Caps";
  //margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                    0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                    0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
  }
`;

const WelcomeText = styled.h2`
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
  color: #D77E8F;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 550px;
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
  font-family:  "Overlock", serif;
`;

const StyledLink = styled(Link)`
  color: #E1A0AC;
  text-decoration: none;
  font-weight: bold;
  font-family:  "Overlock", serif;
  &:hover {
    text-decoration: underline;
  }
`;
const BakeHomeButton = styled.button`
  background: #ffe4d4;
  color: #191818d3;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
  &:hover {
    box-shadow: 0 1rem 1.25rem 0 rgba(217, 217, 217, 0.5), 
                  0 0.75rem 0.5rem rgba(255, 255, 255, 0.52) inset, 
                  0 0.25rem 0.5rem 0 rgba(135, 149, 178, 0.362) inset;
    transform: scale(1.05);
  }
`;
