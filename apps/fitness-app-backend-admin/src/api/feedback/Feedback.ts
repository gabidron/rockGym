import { Client } from "../client/Client";

export type Feedback = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comments: string | null;
  client?: Client | null;
  date: Date | null;
};
