import { client, Prisma, PrismaClient } from '../../../database/client';

export class StudentExamQuestionAnswerRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async upsert(args: Prisma.StudentExamQuestionAnswerUpsertArgs) {
    return this.prisma.studentExamQuestionAnswer.upsert(args);
  }

  async findMany<T extends Prisma.StudentExamQuestionAnswerInclude>(
    query: Prisma.StudentExamQuestionAnswerFindManyArgs['where'],
    options: { include: T },
  ) {
    return this.prisma.studentExamQuestionAnswer.findMany({
      where: query,
      include: options.include,
    });
  }
}

export const studentExamQuestionAnswerRepo = new StudentExamQuestionAnswerRepo(
  client,
);
