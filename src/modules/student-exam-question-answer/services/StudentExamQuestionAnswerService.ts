import { Prisma } from '../../../database/client';
import {
  StudentExamQuestionAnswerRepo,
  studentExamQuestionAnswerRepo,
} from '../repos/StudentExamQuestionAnswerRepo';

export class StudentExamQuestionAnswerService {
  constructor(
    private readonly studentExamQuestionAnswerRepo: StudentExamQuestionAnswerRepo,
  ) {}
  async upsert(args: Prisma.StudentExamQuestionAnswerUpsertArgs) {
    return this.studentExamQuestionAnswerRepo.upsert(args);
  }

  async findMany<T extends Prisma.StudentExamQuestionAnswerInclude>(
    query: Prisma.StudentExamQuestionAnswerFindManyArgs['where'],
    options: { include: T },
  ) {
    return this.studentExamQuestionAnswerRepo.findMany(query, options);
  }
}

export const studentExamQuestionAnswerService =
  new StudentExamQuestionAnswerService(studentExamQuestionAnswerRepo);
