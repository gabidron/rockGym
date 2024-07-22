export type Subscription = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  duration: number | null;
  details: string | null;
  price: number | null;
  name: string | null;
};
