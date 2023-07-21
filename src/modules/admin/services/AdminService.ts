import { Prisma } from '../../../database/client';
import { AdminRepo, adminRepo } from '../repos/AdminRepo';

export class AdminService {
  constructor(private readonly adminRepo: AdminRepo) {}

  async createOne(data: Prisma.AdminUncheckedCreateInput) {
    return await this.adminRepo.createOne(data);
  }

  async findOne(query: Prisma.AdminWhereInput) {
    return await this.adminRepo.findOne(query);
  }
}

export const adminService = new AdminService(adminRepo);
