import { JsonValue } from "type-fest";
import { Reservation } from "../reservation/Reservation";
import { Feedback } from "../feedback/Feedback";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  phoneNumber: string | null;
  email: string | null;
  notes: string | null;
  profilePicture: JsonValue;
  name: string | null;
  reservations?: Array<Reservation>;
  feedbacks?: Array<Feedback>;
};
