import { clientAxios } from ".";
import { User } from "../types";

export const UserService = {
  searchForUsers: async (search: string): Promise<User[]> => {
    const response = await clientAxios.get(`/user?search=${search}`);
    return response.data;
  },
};
