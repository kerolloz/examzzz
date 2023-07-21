import { z } from 'zod';
import { endpoint } from '../../core';
import { studentExamScoreService } from '../../modules';

const studentExamScoreQuerySchema = z.object({
  studentId: z.coerce.number().optional(),
  examId: z.coerce.number().optional(),
});

export const findMany = endpoint(
  { query: studentExamScoreQuerySchema },
  async (req) => {
    return {
      content: {
        message: 'Student exam scores fetched successfully!',
        scores: await studentExamScoreService.findMany(
          req.query as unknown as z.infer<typeof studentExamScoreQuerySchema>,
        ),
      },
    };
  },
);
