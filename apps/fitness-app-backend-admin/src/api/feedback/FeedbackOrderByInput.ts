import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  comments?: SortOrder;
  clientId?: SortOrder;
  date?: SortOrder;
};
