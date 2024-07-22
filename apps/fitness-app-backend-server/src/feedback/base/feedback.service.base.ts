/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Feedback as PrismaFeedback,
  Client as PrismaClient,
} from "@prisma/client";

export class FeedbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.FeedbackCountArgs, "select">): Promise<number> {
    return this.prisma.feedback.count(args);
  }

  async feedbacks(
    args: Prisma.FeedbackFindManyArgs
  ): Promise<PrismaFeedback[]> {
    return this.prisma.feedback.findMany(args);
  }
  async feedback(
    args: Prisma.FeedbackFindUniqueArgs
  ): Promise<PrismaFeedback | null> {
    return this.prisma.feedback.findUnique(args);
  }
  async createFeedback(
    args: Prisma.FeedbackCreateArgs
  ): Promise<PrismaFeedback> {
    return this.prisma.feedback.create(args);
  }
  async updateFeedback(
    args: Prisma.FeedbackUpdateArgs
  ): Promise<PrismaFeedback> {
    return this.prisma.feedback.update(args);
  }
  async deleteFeedback(
    args: Prisma.FeedbackDeleteArgs
  ): Promise<PrismaFeedback> {
    return this.prisma.feedback.delete(args);
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.feedback
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }
}
