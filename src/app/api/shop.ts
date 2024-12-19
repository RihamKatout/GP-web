import { clientAxios } from "./axios";

export async function getShopCategoriesApi() {
  const response = await clientAxios.get("/category/store");
  return response;
}