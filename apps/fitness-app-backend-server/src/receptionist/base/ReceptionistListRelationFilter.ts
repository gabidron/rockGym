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
import { ReceptionistWhereInput } from "./ReceptionistWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReceptionistListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReceptionistWhereInput,
  })
  @ValidateNested()
  @Type(() => ReceptionistWhereInput)
  @IsOptional()
  @Field(() => ReceptionistWhereInput, {
    nullable: true,
  })
  every?: ReceptionistWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReceptionistWhereInput,
  })
  @ValidateNested()
  @Type(() => ReceptionistWhereInput)
  @IsOptional()
  @Field(() => ReceptionistWhereInput, {
    nullable: true,
  })
  some?: ReceptionistWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReceptionistWhereInput,
  })
  @ValidateNested()
  @Type(() => ReceptionistWhereInput)
  @IsOptional()
  @Field(() => ReceptionistWhereInput, {
    nullable: true,
  })
  none?: ReceptionistWhereInput;
}
export { ReceptionistListRelationFilter as ReceptionistListRelationFilter };
