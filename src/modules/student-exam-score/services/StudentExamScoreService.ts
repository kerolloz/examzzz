import { Prisma } from '../../../database/client';
import {
  StudentExamScoreRepo,
  studentExamScoreRepo,
} from '../repos/StudentExamScoreRepo';

export class StudentExamScoreService {
  constructor(private readonly studentExamScoreRepo: StudentExamScoreRepo) {}

  async upsert(args: Prisma.StudentExamScoreUpsertArgs) {
    return this.studentExamScoreRepo.upsert(args);
  }

  async findMany(query: Prisma.StudentExamScoreWhereInput) {
    return this.studentExamScoreRepo.findMany(query);
  }
}

export const studentExamScoreService = new StudentExamScoreService(
  studentExamScoreRepo,
);
