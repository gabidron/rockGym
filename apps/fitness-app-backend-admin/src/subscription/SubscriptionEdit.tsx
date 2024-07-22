import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Details" multiline source="details" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
