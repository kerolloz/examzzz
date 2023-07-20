import { Prisma } from '../../../database/client';
import { ExamRepo, examRepo } from '../repos/ExamRepo';

export class ExamService {
  constructor(private readonly examRepo: ExamRepo) {}

  async createOne(data: Prisma.ExamCreateInput) {
    return this.examRepo.createOne(data);
  }
}

export const examService = new ExamService(examRepo);
