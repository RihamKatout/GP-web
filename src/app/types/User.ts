export type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  roles: string[];
  userImageURL: string | null;
  signUpDate: Date;
  numberOfStores: number;
  enabled: boolean;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
};
