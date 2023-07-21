import { z } from 'zod';
import { endpoint } from '../../core';
import { studentExamQuestionAnswerService } from '../../modules';
import { IAuthRequest } from '../../types/auth';

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

    const studentId = (req as IAuthRequest).currentUser.id;
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
