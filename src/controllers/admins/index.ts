import { z } from 'zod';
import { HttpException, UNAUTHORIZED, endpoint } from '../../core';
import { JsonWebToken, Password } from '../../lib';
import { UserRole } from '../../middleware/roles';
import { adminService } from '../../modules';

const adminLoginBodySchema = z.object({
  username: z.string().trim().min(1).max(100),
  password: z.string().trim().min(1).max(100),
});

export const login = endpoint(
  {
    body: adminLoginBodySchema,
  },
  async (req) => {
    const { username, password } = req.body as z.infer<
      typeof adminLoginBodySchema
    >;

    const admin = await adminService.findOne({
      username,
    });

    if (!admin) {
      throw new HttpException(UNAUTHORIZED, {
        message: 'Invalid username or password!',
      });
    }

    const isPasswordValid = await Password.isCorrectPassword(
      password,
      admin.password,
    );

    if (!isPasswordValid) {
      throw new HttpException(UNAUTHORIZED, {
        message: 'Invalid username or password!',
      });
    }

    const token = JsonWebToken.encode({
      id: admin.id,
      role: UserRole.ADMIN,
    });

    return {
      content: {
        message: 'Logged in successfully!',
        data: { token },
      },
    };
  },
);
