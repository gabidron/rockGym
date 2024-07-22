import * as graphql from "@nestjs/graphql";
import { ReceptionistResolverBase } from "./base/receptionist.resolver.base";
import { Receptionist } from "./base/Receptionist";
import { ReceptionistService } from "./receptionist.service";

@graphql.Resolver(() => Receptionist)
export class ReceptionistResolver extends ReceptionistResolverBase {
  constructor(protected readonly service: ReceptionistService) {
    super(service);
  }
}
