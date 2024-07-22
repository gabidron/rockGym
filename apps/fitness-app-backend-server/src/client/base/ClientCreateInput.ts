/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ReservationCreateNestedManyWithoutClientsInput } from "./ReservationCreateNestedManyWithoutClientsInput";
import { Type } from "class-transformer";
import { FeedbackCreateNestedManyWithoutClientsInput } from "./FeedbackCreateNestedManyWithoutClientsInput";

@InputType()
class ClientCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profilePicture?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReservationCreateNestedManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => ReservationCreateNestedManyWithoutClientsInput)
  @IsOptional()
  @Field(() => ReservationCreateNestedManyWithoutClientsInput, {
    nullable: true,
  })
  reservations?: ReservationCreateNestedManyWithoutClientsInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutClientsInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutClientsInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutClientsInput, {
    nullable: true,
  })
  feedbacks?: FeedbackCreateNestedManyWithoutClientsInput;
}

export { ClientCreateInput as ClientCreateInput };
