import { ReservationCreateNestedManyWithoutSchedulesInput } from "./ReservationCreateNestedManyWithoutSchedulesInput";

export type ScheduleCreateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  isRecurring?: boolean | null;
  title?: string | null;
  description?: string | null;
  reservations?: ReservationCreateNestedManyWithoutSchedulesInput;
};
