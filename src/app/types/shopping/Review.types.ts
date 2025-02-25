import { UserBasicInfo } from "../userManagement/User.types";

export interface Review {
  id: number;
  feedback: string;
  rating: number;
  date: string;
  isProductReview: boolean;
  userInfo: UserBasicInfo;
}
