import { Prisma, PrismaClient, client } from '../../../database/client';

export class ExamQuestionRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async createMany(data: Prisma.ExamQuestionCreateManyInput[]) {
    return this.prisma.examQuestion.createMany({ data });
  }

  async findMany(
    query: Prisma.ExamQuestionWhereInput,
    options: Prisma.ExamQuestionFindManyArgs['include'] = { question: true },
  ) {
    return this.prisma.examQuestion.findMany({
      where: query,
      include: options,
    });
  }

  async groupByExam(query: Prisma.ExamQuestionWhereInput) {
    return this.prisma.examQuestion.groupBy({
      by: ['examId'],
      where: query,
      _count: { id: true },
    });
  }
}

export const examQuestionRepo = new ExamQuestionRepo(client);
