import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReceptionistWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  username?: StringNullableFilter;
  password?: StringNullableFilter;
};
