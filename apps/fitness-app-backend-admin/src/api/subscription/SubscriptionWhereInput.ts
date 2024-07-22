import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  duration?: IntNullableFilter;
  details?: StringNullableFilter;
  price?: FloatNullableFilter;
  name?: StringNullableFilter;
};
