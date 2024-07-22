/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Receptionist as PrismaReceptionist } from "@prisma/client";

export class ReceptionistServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ReceptionistCountArgs, "select">
  ): Promise<number> {
    return this.prisma.receptionist.count(args);
  }

  async receptionists(
    args: Prisma.ReceptionistFindManyArgs
  ): Promise<PrismaReceptionist[]> {
    return this.prisma.receptionist.findMany(args);
  }
  async receptionist(
    args: Prisma.ReceptionistFindUniqueArgs
  ): Promise<PrismaReceptionist | null> {
    return this.prisma.receptionist.findUnique(args);
  }
  async createReceptionist(
    args: Prisma.ReceptionistCreateArgs
  ): Promise<PrismaReceptionist> {
    return this.prisma.receptionist.create(args);
  }
  async updateReceptionist(
    args: Prisma.ReceptionistUpdateArgs
  ): Promise<PrismaReceptionist> {
    return this.prisma.receptionist.update(args);
  }
  async deleteReceptionist(
    args: Prisma.ReceptionistDeleteArgs
  ): Promise<PrismaReceptionist> {
    return this.prisma.receptionist.delete(args);
  }
}
