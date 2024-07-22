import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Email" source="email" />
        <TextField label="Password" source="password" />
        <TextField label="Role" source="role" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
