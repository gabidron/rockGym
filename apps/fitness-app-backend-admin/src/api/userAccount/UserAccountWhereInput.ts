import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserAccountWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  password?: StringNullableFilter;
  role?: "Option1";
  username?: StringNullableFilter;
};
