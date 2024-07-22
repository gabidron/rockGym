import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReceptionistService } from "./receptionist.service";
import { ReceptionistControllerBase } from "./base/receptionist.controller.base";

@swagger.ApiTags("receptionists")
@common.Controller("receptionists")
export class ReceptionistController extends ReceptionistControllerBase {
  constructor(protected readonly service: ReceptionistService) {
    super(service);
  }
}
