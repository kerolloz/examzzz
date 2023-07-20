import { client, Prisma, PrismaClient } from '../../../database/client';

export class QuestionRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async createOne(data: Prisma.QuestionCreateInput) {
    return this.prisma.question.create({ data });
  }

  async findMany() {
    return this.prisma.question.findMany();
  }
}

export const questionRepo = new QuestionRepo(client);
