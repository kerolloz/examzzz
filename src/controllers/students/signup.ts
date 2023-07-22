import z from 'zod';
import { endpoint } from '../../core';
import { JsonWebToken } from '../../lib';
import { UserRole } from '../../middleware/roles';
import { studentService } from '../../modules';

const signupBodySchema = z.object({
  name: z.string().trim().min(3).max(30),
  age: z.coerce.number().min(1).max(100),
});

export default endpoint({ body: signupBodySchema }, async (req) => {
  const user = await studentService.createOne(
    req.body as z.infer<typeof signupBodySchema>,
  );
  const token = JsonWebToken.encode({
    id: user.id,
    role: UserRole.STUDENT,
  });

  return {
    content: {
      message: 'Registered successfully!',
      data: { user, token },
    },
  };
});
