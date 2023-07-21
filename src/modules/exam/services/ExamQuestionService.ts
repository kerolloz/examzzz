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

  async groupByExam(query: Prisma.ExamQuestionWhereInput) {
    const examQuestions = await this.examQuestionRepo.groupByExam(query);
    return examQuestions.map((examQ) => ({
      examId: examQ.examId,
      totalQuestions: examQ._count.id,
    }));
  }
}

export const examQuestionService = new ExamQuestionService(examQuestionRepo);
