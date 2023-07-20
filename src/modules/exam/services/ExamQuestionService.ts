import { Prisma } from '../../../database/client';
import { examQuestionRepo, ExamQuestionRepo } from '../repos/ExamQuestion';

export class ExamQuestionService {
  constructor(private readonly examQuestionRepo: ExamQuestionRepo) {}

  async createMany(data: Prisma.ExamQuestionCreateManyInput[]) {
    return this.examQuestionRepo.createMany(data);
  }

  async findMany(
    query: Prisma.ExamQuestionWhereInput,
    options: Prisma.ExamQuestionFindManyArgs['include'] = { question: true },
  ) {
    return this.examQuestionRepo.findMany(query, options);
  }
}

export const examQuestionService = new ExamQuestionService(examQuestionRepo);
