import z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
  const { loginUserContext } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    loginUserContext(data);
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
    </form>
  );
};

export default LoginForm;
