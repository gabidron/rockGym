import { Client } from "../client/Client";
import { Schedule } from "../schedule/Schedule";

export type Reservation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  notes: string | null;
  reservationDate: Date | null;
  client?: Client | null;
  schedule?: Schedule | null;
};
