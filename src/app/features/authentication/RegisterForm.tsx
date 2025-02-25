import { useEffect, useRef } from "react";
import z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import emailjs from "emailjs-com";

import {
  ButtonContainer,
  FormContainer,
  LinkToRegister,
  MainContainer,
  StyledButton,
  StyledInput,
  StyledLink,
  WelcomeText,
} from "./StyledComponents";

// Validation schema
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
  const location = useLocation();
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

  const displayedErrors = useRef<Set<string>>(new Set());

  useEffect(() => {
    Object.keys(errors).forEach((key) => {
      const errorMessage = errors[key as keyof registrationFormFields]?.message;
      if (errorMessage && !displayedErrors.current.has(errorMessage)) {
        messageApi.error(errorMessage);
        displayedErrors.current.add(errorMessage);
      }
    });

    if (Object.keys(errors).length === 0) {
      displayedErrors.current.clear();
    }
  }, [errors, messageApi]);

  // Function to send verification email using EmailJS
  const sendVerificationEmail = (email: string) => {
    const templateParams = {
      user_email: email,
      reset_link: "http://localhost:5173/", // Change this to your actual home URL
    };

    emailjs
      .send(
        "service_4mswwre", // Replace with your actual EmailJS Service ID
        "template_tjxhrls", // Replace with your actual EmailJS Template ID
        templateParams,
        "3utpEi5L2w2bw-lZn" // Replace with your actual EmailJS Public Key
      )
      .then(
        () => {
          messageApi.success("Verification email sent! Check your inbox.");
        },
        () => {
          messageApi.error("Failed to send verification email. Please try again.");
        }
      );
  };

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

      // Register user
      await registerUserContext(data);

      // Send verification email
      sendVerificationEmail(data.email);

      messageApi.success("Registration successful! Check your email to verify.");
      // navigate("/", { state: { showWelcome: true } });
    } catch (error: any) {
      messageApi.error(
        error.response?.data?.errors[0] || "Registration failed."
      );
      setError("root", {
        type: "manual",
        message:
          error.response?.data?.errors[0] || "An unexpected error occurred.",
      });
    }
  };

  return (
    <MainContainer style={{ height: "600px" }}>
      {contextHolder}
      <WelcomeText>Register</WelcomeText>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <StyledInput {...register("email")} placeholder="Email" />

        <StyledInput
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <StyledInput
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
        />
        <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
          <StyledInput {...register("firstName")} placeholder="First Name" />
          <StyledInput {...register("lastName")} placeholder="Last Name" />
        </div>
        <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
          <StyledInput {...register("username")} placeholder="Username" />
          <StyledInput {...register("phoneNumber")} placeholder="Phone Number" />
        </div>
        <ButtonContainer>
          <StyledButton onClick={() => navigate("/")} style={{ width: "25%" }}>
            <HomeRoundedIcon style={{ fontSize: "2rem" }} />
          </StyledButton>
          <StyledButton type="submit" disabled={isSubmitting}>
            Register
          </StyledButton>
        </ButtonContainer>
      </FormContainer>

      <LinkToRegister>
        Have an account? <StyledLink to="/login">Login</StyledLink>
      </LinkToRegister>
    </MainContainer>
  );
};

export default RegisterForm;
