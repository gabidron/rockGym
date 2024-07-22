import { ReceptionistWhereInput } from "./ReceptionistWhereInput";
import { ReceptionistOrderByInput } from "./ReceptionistOrderByInput";

export type ReceptionistFindManyArgs = {
  where?: ReceptionistWhereInput;
  orderBy?: Array<ReceptionistOrderByInput>;
  skip?: number;
  take?: number;
};
