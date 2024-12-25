import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginFields, loginSchema } from "../../types";

// TODO : show welcome message
export const LoginForm = () => {
  const { loginUserContext } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    try {
      await loginUserContext(data);
      navigate("/");
    } catch (error: any) {
      if (error.response.data.errors[0] === "Bad credentials") {
        setError("root", {
          message: "Invalid email or password, please try again!",
        });
      } else setError("root", { message: error.response.data.errors[0] });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" />
      {errors.email && (
        <div className="alert alert-danger">{errors.email.message}</div>
      )}

      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && (
        <div className="alert alert-danger">{errors.password.message}</div>
      )}

      <button type="submit" disabled={isSubmitting}>
        Login
      </button>
      {errors.root && (
        <div className="alert alert-danger">{errors.root.message}</div>
      )}
    </form>
  );
};