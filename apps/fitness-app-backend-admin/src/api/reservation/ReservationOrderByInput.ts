import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  notes?: SortOrder;
  reservationDate?: SortOrder;
  clientId?: SortOrder;
  scheduleId?: SortOrder;
};
