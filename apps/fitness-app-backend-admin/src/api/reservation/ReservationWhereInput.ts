import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type ReservationWhereInput = {
  id?: StringFilter;
  notes?: StringNullableFilter;
  reservationDate?: DateTimeNullableFilter;
  client?: ClientWhereUniqueInput;
  schedule?: ScheduleWhereUniqueInput;
};
