import { Prisma, PrismaClient, client } from '../../../database/client';

export class AdminRepo {
  constructor(private readonly prisma: PrismaClient) {}

  createOne(data: Prisma.AdminUncheckedCreateInput) {
    return this.prisma.admin.create({ data });
  }

  findOne(query: Prisma.AdminWhereInput) {
    return this.prisma.admin.findFirst({ where: query });
  }
}

export const adminRepo = new AdminRepo(client);
