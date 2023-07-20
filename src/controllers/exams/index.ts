import { z } from 'zod';
import { endpoint } from '../../core';
import { examService } from '../../modules/exam/services/ExamService';

const createExamSchema = z.object({
  name: z.string().min(3).max(30),
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
