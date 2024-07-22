import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  notes?: StringNullableFilter;
  profilePicture?: JsonFilter;
  name?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
  feedbacks?: FeedbackListRelationFilter;
};
