import { Module } from "@nestjs/common";
import { ReceptionistModuleBase } from "./base/receptionist.module.base";
import { ReceptionistService } from "./receptionist.service";
import { ReceptionistController } from "./receptionist.controller";
import { ReceptionistResolver } from "./receptionist.resolver";

@Module({
  imports: [ReceptionistModuleBase],
  controllers: [ReceptionistController],
  providers: [ReceptionistService, ReceptionistResolver],
  exports: [ReceptionistService],
})
export class ReceptionistModule {}
