import { Prisma } from '../../../database/client';
import { StudentRepo, studentRepo } from '../repos/StudentRepo';

export class StudentService {
  constructor(private readonly studentRepo: StudentRepo) {}

  async createOne(data: Prisma.StudentCreateInput) {
    return this.studentRepo.createOne(data);
  }

  async findOne(query: Prisma.StudentWhereInput) {
    return this.studentRepo.findOne(query);
  }
}

export const studentService = new StudentService(studentRepo);
