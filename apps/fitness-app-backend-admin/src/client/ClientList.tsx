import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Clients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="Email" source="email" />
        <TextField label="Notes" source="notes" />
        <TextField label="ProfilePicture" source="profilePicture" />
        <TextField label="Name" source="name" />
      </Datagrid>
    </List>
  );
};
