import { client, Prisma, PrismaClient } from '../../../database/client';

export class StudentExamQuestionAnswerRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async createOne(data: Prisma.StudentExamQuestionAnswerCreateInput) {
    return this.prisma.studentExamQuestionAnswer.create({ data });
  }

  async findMany(args: Prisma.StudentExamQuestionAnswerFindManyArgs) {
    return this.prisma.studentExamQuestionAnswer.findMany(args);
  }
}

export const studentExamQuestionAnswerRepo = new StudentExamQuestionAnswerRepo(
  client,
);
