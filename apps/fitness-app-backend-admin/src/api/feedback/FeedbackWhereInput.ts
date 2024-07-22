import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FeedbackWhereInput = {
  id?: StringFilter;
  rating?: IntNullableFilter;
  comments?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
};
