import { z } from 'zod';
import { endpoint } from '../../core';
import { studentExamQuestionAnswerService } from '../../modules/student-exam-question-answer';

const answerStudentExamQuestionBodySchema = z.object({
  answerText: z.string().min(1).max(1000),
});

const answerStudentExamQuestionParamsSchema = z.object({
  examQuestionId: z.coerce.number(),
});

export const answer = endpoint(
  {
    body: answerStudentExamQuestionBodySchema,
    params: answerStudentExamQuestionParamsSchema,
  },
  async (req) => {
    const { examQuestionId } = req.params as unknown as z.infer<
      typeof answerStudentExamQuestionParamsSchema
    >;
    const { answerText } = req.body as z.infer<
      typeof answerStudentExamQuestionBodySchema
    >;

    // TODO: change this to use the logged in student id
    const studentId = 2;
    const data = {
      answerText,
      examQuestionId,
      studentId,
    };

    await studentExamQuestionAnswerService.upsert({
      where: {
        answerUniqueId: { examQuestionId, studentId },
      },
      update: { answerText },
      create: data,
    });

    return 'Answered successfully!';
  },
);
