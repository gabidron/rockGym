import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type FeedbackCreateInput = {
  rating?: number | null;
  comments?: string | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
};
