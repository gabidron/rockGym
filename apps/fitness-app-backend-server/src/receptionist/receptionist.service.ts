import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReceptionistServiceBase } from "./base/receptionist.service.base";

@Injectable()
export class ReceptionistService extends ReceptionistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
