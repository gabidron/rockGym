import { Reservation } from "../reservation/Reservation";

export type Schedule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startTime: Date | null;
  endTime: Date | null;
  isRecurring: boolean | null;
  title: string | null;
  description: string | null;
  reservations?: Array<Reservation>;
};
