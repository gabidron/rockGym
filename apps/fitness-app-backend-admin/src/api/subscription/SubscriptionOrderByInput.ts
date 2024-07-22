import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  duration?: SortOrder;
  details?: SortOrder;
  price?: SortOrder;
  name?: SortOrder;
};
