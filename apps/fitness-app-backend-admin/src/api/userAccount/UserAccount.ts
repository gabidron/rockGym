export type UserAccount = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  password: string | null;
  role?: "Option1" | null;
  username: string | null;
};
