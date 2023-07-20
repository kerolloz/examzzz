import { Prisma, PrismaClient, client } from '../../../database/client';
export class ExamRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async createOne(data: Prisma.ExamCreateInput) {
    return this.prisma.exam.create({ data });
  }

  async findMany() {
    return this.prisma.exam.findMany();
  }
}

export const examRepo = new ExamRepo(client);
