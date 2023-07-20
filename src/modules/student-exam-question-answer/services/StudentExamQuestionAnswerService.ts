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

  async findMany(args: Prisma.StudentExamQuestionAnswerFindManyArgs) {
    return this.studentExamQuestionAnswerRepo.findMany(args);
  }
}

export const studentExamQuestionAnswerService =
  new StudentExamQuestionAnswerService(studentExamQuestionAnswerRepo);
