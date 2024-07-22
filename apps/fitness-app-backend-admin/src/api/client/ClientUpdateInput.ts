import { InputJsonValue } from "../../types";
import { ReservationUpdateManyWithoutClientsInput } from "./ReservationUpdateManyWithoutClientsInput";
import { FeedbackUpdateManyWithoutClientsInput } from "./FeedbackUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  phoneNumber?: string | null;
  email?: string | null;
  notes?: string | null;
  profilePicture?: InputJsonValue;
  name?: string | null;
  reservations?: ReservationUpdateManyWithoutClientsInput;
  feedbacks?: FeedbackUpdateManyWithoutClientsInput;
};
