import { Request } from 'express';
import { Admin, Student } from '../../database/client';
import { UserRole } from '../../middleware/roles';

export interface IAuthToken {
  id: number;
  role: UserRole;
}

export interface IAuthRequest extends Request {
  currentUser: Student | Admin;
  userRole: UserRole;
}
