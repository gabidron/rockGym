import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type FeedbackUpdateInput = {
  rating?: number | null;
  comments?: string | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
};
