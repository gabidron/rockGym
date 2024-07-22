import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ScheduleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Schedules"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="StartTime" source="startTime" />
        <TextField label="EndTime" source="endTime" />
        <BooleanField label="IsRecurring" source="isRecurring" />
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
      </Datagrid>
    </List>
  );
};
