import { RegistrationFields } from "../types";
import { clientAxios } from ".";

export async function loginApi(userData: { email: string; password: string }) {
  const response = await clientAxios.post("/auth/login", userData);
  return response;
}

export async function getCurrentUser() {
  const response = await clientAxios.get("/user");
  return response;
}

export async function registerApi(registrationFormFields: RegistrationFields) {
  const response = await clientAxios.post(
    "/auth/register",
    registrationFormFields
  );
  return response;
}
