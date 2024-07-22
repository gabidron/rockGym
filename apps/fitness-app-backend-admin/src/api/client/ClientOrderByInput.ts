import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  phoneNumber?: SortOrder;
  email?: SortOrder;
  notes?: SortOrder;
  profilePicture?: SortOrder;
  name?: SortOrder;
};
