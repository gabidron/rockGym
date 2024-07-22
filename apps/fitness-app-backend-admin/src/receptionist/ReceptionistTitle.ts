import { Receptionist as TReceptionist } from "../api/receptionist/Receptionist";

export const RECEPTIONIST_TITLE_FIELD = "name";

export const ReceptionistTitle = (record: TReceptionist): string => {
  return record.name?.toString() || String(record.id);
};
