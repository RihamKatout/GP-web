import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { RegistrationFields, registrationSchema } from "../../types";

//TODO : show welcome message
export const RegisterForm = () => {
  const navigate = useNavigate();
  const { registerUserContext } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<RegistrationFields>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationFields> = async (
    data: RegistrationFields
  ) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }
      await registerUserContext(data);
      navigate("/");
    } catch (error: any) {
      setError("root", {
        type: "manual",
        message: error.response.data.errors[0],
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      {errors.username && (
        <div className="alert alert-danger">{errors.username.message}</div>
      )}

      <input {...register("email")} placeholder="Email" />
      {errors.email && (
        <div className="alert alert-danger">{errors.email.message}</div>
      )}

      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && (
        <div className="alert alert-danger">{errors.password.message}</div>
      )}

      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && (
        <div className="alert alert-danger">
          {errors.confirmPassword.message}
        </div>
      )}

      <input {...register("firstName")} placeholder="First Name" />
      {errors.firstName && (
        <div className="alert alert-danger">{errors.firstName.message}</div>
      )}

      <input {...register("lastName")} placeholder="Last Name" />
      {errors.lastName && (
        <div className="alert alert-danger">{errors.lastName.message}</div>
      )}

      <input {...register("phoneNumber")} placeholder="Phone Number" />
      {errors.phoneNumber && (
        <div className="alert alert-danger">{errors.phoneNumber.message}</div>
      )}

      <button type="submit" disabled={isSubmitting}>
        Register
      </button>
      {errors.root && (
        <div className="alert alert-danger">{errors.root.message}</div>
      )}
      {isSubmitSuccessful && (
        <div className="alert alert-success">Registration successful!</div>
      )}
    </form>
  );
};