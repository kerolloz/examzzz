import { z } from 'zod';
import { endpoint } from '../../core';
import { UserRole } from '../../middleware/roles';
import { examQuestionService, examService } from '../../modules/';
import { IAuthRequest } from '../../types/auth';

const createExamSchema = z.object({
  name: z.string().trim().min(3).max(30),
  duration: z.coerce.number().min(1).max(1000),
});

export const createOne = endpoint({ body: createExamSchema }, async (req) => {
  const exam = await examService.createOne(
    req.body as z.infer<typeof createExamSchema>,
  );

  return {
    content: {
      message: 'Exam created successfully!',
      data: { exam },
    },
  };
});

export const findMany = endpoint(async () => {
  const exams = await examService.findMany();

  return {
    content: {
      message: 'Exams fetched successfully!',
      data: { exams },
    },
  };
});

const addQuestionsToExamBodySchema = z.object({
  questions: z.array(z.number()),
});

const addQuestionsToExamParamsSchema = z.object({ examId: z.coerce.number() });

export const addQuestionsToExam = endpoint(
  {
    body: addQuestionsToExamBodySchema,
    params: addQuestionsToExamParamsSchema,
  },
  async (req) => {
    const { questions } = req.body as z.infer<
      typeof addQuestionsToExamBodySchema
    >;
    const { examId } = req.params as unknown as z.infer<
      typeof addQuestionsToExamParamsSchema
    >;

    await examQuestionService.createMany(
      questions.map((questionId) => ({ questionId, examId })),
    );
    return 'Questions linked successfully!';
  },
);

export const findExamQuestions = endpoint(
  { params: addQuestionsToExamParamsSchema },
  async (req) => {
    const { examId } = req.params as unknown as z.infer<
      typeof addQuestionsToExamParamsSchema
    >;

    const questions = await examQuestionService.findMany({
      examId,
    });

    const { userRole } = req as IAuthRequest;
    const response =
      userRole === UserRole.STUDENT
        ? questions.map((question) => ({
            ...question,
            question: {
              ...question.question,
              correctAnswer: undefined,
            },
          }))
        : questions;

    return {
      content: {
        message: 'Questions fetched successfully!',
        data: { questions: response },
      },
    };
  },
);
