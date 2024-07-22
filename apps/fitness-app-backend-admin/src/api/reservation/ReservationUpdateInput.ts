import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type ReservationUpdateInput = {
  notes?: string | null;
  reservationDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  schedule?: ScheduleWhereUniqueInput | null;
};
