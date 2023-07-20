import { Prisma } from '../../../database/client';
import {
  StudentExamQuestionAnswerRepo,
  studentExamQuestionAnswerRepo,
} from '../repos/StudentExamQuestionAnswerRepo';

export class StudentExamQuestionAnswerService {
  constructor(
    private readonly studentExamQuestionAnswerRepo: StudentExamQuestionAnswerRepo,
  ) {}
  async createOne(args: Prisma.StudentExamQuestionAnswerCreateInput) {
    return this.studentExamQuestionAnswerRepo.createOne(args);
  }
}

export const studentExamQuestionAnswerService =
  new StudentExamQuestionAnswerService(studentExamQuestionAnswerRepo);
