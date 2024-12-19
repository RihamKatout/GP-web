import { clientAxios } from "./axios";

export async function loginApi(userData: { email: string; password: string }) {
  const response = await clientAxios.post("/auth/login", userData);
  return response;
}

export async function registerApi(registrationFormFields: {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}) {
  const response = await clientAxios.post(
    "/auth/register",
    registrationFormFields
  );
  return response;
}
