import { InputJsonValue } from "../../types";
import { ReservationCreateNestedManyWithoutClientsInput } from "./ReservationCreateNestedManyWithoutClientsInput";
import { FeedbackCreateNestedManyWithoutClientsInput } from "./FeedbackCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  phoneNumber?: string | null;
  email?: string | null;
  notes?: string | null;
  profilePicture?: InputJsonValue;
  name?: string | null;
  reservations?: ReservationCreateNestedManyWithoutClientsInput;
  feedbacks?: FeedbackCreateNestedManyWithoutClientsInput;
};
