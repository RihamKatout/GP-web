import  { useEffect, useRef } from "react";
import z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { message } from "antd";
import home from "../../../assets/home.png";

const schema = z.object({
  username: z
    .string()
    .min(4)
    .max(20)
    .regex(/^\w+$/, "Username contains invalid characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
  firstName: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z]+$/, "First name contains invalid characters"),
  lastName: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z]+$/, "Last name contains invalid characters"),
  phoneNumber: z
    .string()
    .length(10, "Phone number must be 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only digits"),
});

export type registrationFormFields = z.infer<typeof schema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const { registerUserContext } = useAuth();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<registrationFormFields>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    resolver: zodResolver(schema),
  });

  // Track displayed error messages
  const displayedErrors = useRef<Set<string>>(new Set());

  useEffect(() => {
    Object.keys(errors).forEach((key) => {
      const errorMessage = errors[key as keyof registrationFormFields]?.message;
      if (errorMessage && !displayedErrors.current.has(errorMessage)) {
        messageApi.error(errorMessage);
        displayedErrors.current.add(errorMessage); // Mark the message as displayed
      }
    });

    // Clear the error messages when errors object is cleared
    if (Object.keys(errors).length === 0) {
      displayedErrors.current.clear();
    }
  }, [errors, messageApi]);

  const onSubmit: SubmitHandler<registrationFormFields> = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        messageApi.error("Passwords do not match.");
        return;
      }

      await registerUserContext(data);
      messageApi.success("Registration successful!");
      navigate("/");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      messageApi.error(error.response?.data?.errors[0] || "Registration failed.");
      setError("root", {
        type: "manual",
        message: error.response?.data?.errors[0] || "An unexpected error occurred.",
      });
    }
  };

  return (
    <MainContainer>
      {contextHolder}
      <WelcomeText>Register</WelcomeText>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <StyledInput {...register("username")} placeholder="Username" />
          <StyledInput {...register("email")} placeholder="Email" />
          <StyledInput {...register("password")} type="password" placeholder="Password" />
          <StyledInput {...register("confirmPassword")} type="password" placeholder="Confirm Password" />
          <StyledInput {...register("firstName")} placeholder="First Name" />
          <StyledInput {...register("lastName")} placeholder="Last Name" />
          <StyledInput {...register("phoneNumber")} placeholder="Phone Number" />
        </InputContainer>

        <ButtonContainer>
          <StyledButton type="submit" disabled={isSubmitting}>
            Register
          </StyledButton>
        </ButtonContainer>
      </form>
      {/* Create Account link */}
      <BakeHomeButton onClick={() => navigate("/")} ><img src={home} style={{ width: "25px", height: "25px" }} /></BakeHomeButton>

      <LinkToRegister>
           Have an account? <StyledLink to="/login">Login</StyledLink>
        </LinkToRegister>
    </MainContainer>
  );
};

export default RegisterForm;



/////////Style Section ///////////
const StyledInput = styled.input `
  background: #f0f4ff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  width: 100%; /* Adjust width to fit the grid layout */
  height: 3.5rem;
  padding: 0 1.5rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: 500;
  margin: 0; /* Remove default margins */
  &:focus {
    box-shadow: 0px 0px 8px #a3b8ff;
  }
  &::placeholder {
    color: #b3b3b3;
    font-size: 0.9rem;
  }
;
`
const StyledButton = styled.button `
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
;
`

const WelcomeText = styled.h2 `
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
  color: #eb977d;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
;
`

const MainContainer = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 400px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 2px 10px 30px rgba(7, 7, 7, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
;
`
const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 1rem; /* Spacing between inputs */
  width: 100%;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns:  repeat(2, 1fr); /* Stack inputs vertically on smaller screens */
    gap: 0.5rem; /* Reduce gap for smaller screens */
  }

  @media (max-width: 480px) {
    grid-template-columns:  repeat(2, 1fr);
    //padding: 0.5rem; /* Adjust padding for very small screens */
  }
`;



const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1.5rem 0;
;
`
const LinkToRegister = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  color: #ffc2af;
  text-decoration: none;
  font-weight: bold;
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
  &:hover {
    background: #ff8a65;
    transform: scale(1.05);
  }
`;