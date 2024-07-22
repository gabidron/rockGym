/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserAccountWhereInput } from "./UserAccountWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserAccountOrderByInput } from "./UserAccountOrderByInput";

@ArgsType()
class UserAccountFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserAccountWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserAccountWhereInput, { nullable: true })
  @Type(() => UserAccountWhereInput)
  where?: UserAccountWhereInput;

  @ApiProperty({
    required: false,
    type: [UserAccountOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserAccountOrderByInput], { nullable: true })
  @Type(() => UserAccountOrderByInput)
  orderBy?: Array<UserAccountOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserAccountFindManyArgs as UserAccountFindManyArgs };