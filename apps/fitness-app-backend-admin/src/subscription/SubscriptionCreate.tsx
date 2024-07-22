import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Details" multiline source="details" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
