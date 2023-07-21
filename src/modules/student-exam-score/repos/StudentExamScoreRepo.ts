import { Prisma, PrismaClient, client } from '../../../database/client';

export class StudentExamScoreRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async upsert(args: Prisma.StudentExamScoreUpsertArgs) {
    return await this.prisma.studentExamScore.upsert(args);
  }

  async findMany(query: Prisma.StudentExamScoreWhereInput) {
    return await this.prisma.studentExamScore.findMany({
      where: query,
      include: {
        exam: true,
        student: true,
      },
    });
  }
}

export const studentExamScoreRepo = new StudentExamScoreRepo(client);
