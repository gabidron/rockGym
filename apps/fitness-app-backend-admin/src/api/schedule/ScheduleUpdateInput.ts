import { ReservationUpdateManyWithoutSchedulesInput } from "./ReservationUpdateManyWithoutSchedulesInput";

export type ScheduleUpdateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  isRecurring?: boolean | null;
  title?: string | null;
  description?: string | null;
  reservations?: ReservationUpdateManyWithoutSchedulesInput;
};
