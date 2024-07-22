import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  isRecurring?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
};
