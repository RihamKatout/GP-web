import z from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";

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
  const { registerUserContext } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
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

  const onSubmit: SubmitHandler<registrationFormFields> = async (
    data: registrationFormFields
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

export default RegisterForm;
