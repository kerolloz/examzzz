import { client, Prisma, PrismaClient } from '../../../database/client';

export class StudentRepo {
  constructor(private readonly prisma: PrismaClient) {}

  async createOne(data: Prisma.StudentCreateInput) {
    return this.prisma.student.create({ data });
  }
}

export const studentRepo = new StudentRepo(client);
