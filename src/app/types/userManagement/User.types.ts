import { RoleEnum } from "..";

export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  roles: RoleEnum[];
  userImageURL: string | null;
  signUpDate: Date;
  numberOfStores: number;
  enabled: boolean;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
};
