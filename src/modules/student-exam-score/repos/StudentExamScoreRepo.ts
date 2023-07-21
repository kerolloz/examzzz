import { Prisma, PrismaClient, client } from '../../../database/client';

export class StudentExamScoreRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async createOne(data: Prisma.StudentExamScoreUncheckedCreateInput) {
    return await this.prisma.studentExamScore.create({ data });
  }

  async findMany(query: Prisma.StudentExamScoreWhereInput) {
    return await this.prisma.studentExamScore.findMany({ where: query });
  }
}

export const studentExamScoreRepo = new StudentExamScoreRepo(client);
