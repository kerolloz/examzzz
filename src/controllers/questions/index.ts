import { z } from 'zod';
import { endpoint } from '../../core';
import { QuestionScoring, QuestionType } from '../../database/client';
import { questionService } from '../../modules';

const createQuestionSchema = z.object({
  text: z.string().min(3).max(1000),
  answers: z.array(z.string().min(1).max(1000)),
  imageUrl: z.string().trim().url().min(1).max(1000).optional(),
  type: z.nativeEnum(QuestionType),
  correctAnswer: z.string().min(1).max(1000),
  scoring: z.nativeEnum(QuestionScoring),
});

export const createOne = endpoint(
  { body: createQuestionSchema },
  async (req) => {
    const question = await questionService.createOne(
      req.body as z.infer<typeof createQuestionSchema>,
    );

    return {
      content: {
        message: 'Question created successfully!',
        data: { question },
      },
    };
  },
);

export const findMany = endpoint(async () => {
  const questions = await questionService.findMany();

  return {
    content: {
      message: 'Questions fetched successfully!',
      data: { questions },
    },
  };
});
