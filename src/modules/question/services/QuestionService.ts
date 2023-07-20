import { Prisma } from '../../../database/client';
import { QuestionRepo, questionRepo } from '../repos/QuestionRepo';

export class QuestionService {
  constructor(private readonly questionRepo: QuestionRepo) {}

  async createOne(data: Prisma.QuestionCreateInput) {
    return this.questionRepo.createOne(data);
  }

  async findMany() {
    return this.questionRepo.findMany();
  }
}

export const questionService = new QuestionService(questionRepo);
