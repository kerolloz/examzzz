import { Request } from 'express';
import { Student } from '../../database/client';

export interface IAuthToken {
  id: number;
}

export interface IAuthRequest extends Request {
  currentUser: Student;
}
