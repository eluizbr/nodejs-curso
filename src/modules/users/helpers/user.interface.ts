import { Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  isActive?: boolean;
  password: string;
  socialToken?: string;
  username: string;
  comparePassword?: Function;
}
