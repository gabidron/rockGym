import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="StartTime" source="startTime" />
        <DateTimeInput label="EndTime" source="endTime" />
        <BooleanInput label="IsRecurring" source="isRecurring" />
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
