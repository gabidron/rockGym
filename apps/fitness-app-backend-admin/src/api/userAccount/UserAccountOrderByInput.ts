import { SortOrder } from "../../util/SortOrder";

export type UserAccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
  username?: SortOrder;
};
