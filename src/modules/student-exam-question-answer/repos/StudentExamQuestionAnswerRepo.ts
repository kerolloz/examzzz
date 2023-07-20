import { client, Prisma, PrismaClient } from '../../../database/client';

export class StudentExamQuestionAnswerRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async upsert(args: Prisma.StudentExamQuestionAnswerUpsertArgs) {
    return this.prisma.studentExamQuestionAnswer.upsert(args);
  }

  async findMany(args: Prisma.StudentExamQuestionAnswerFindManyArgs) {
    return this.prisma.studentExamQuestionAnswer.findMany(args);
  }
}

export const studentExamQuestionAnswerRepo = new StudentExamQuestionAnswerRepo(
  client,
);
