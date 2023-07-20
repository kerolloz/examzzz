import z from 'zod';
import { endpoint } from '../../core';
import { studentService } from '../../modules';

const signupBodySchema = z.object({
  name: z.string().min(3).max(30),
  age: z.coerce.number().min(1).max(100),
});

export default endpoint({ body: signupBodySchema }, async (req) => {
  return {
    content: await studentService.createOne(
      req.body as z.infer<typeof signupBodySchema>,
    ),
    status: 201,
  };
});
