import { Request, Response } from 'express';

import { IUser } from '../helpers/user.interface';
import { userNotFound } from '../helpers/userErrorHandler';
import UserModel from '../models/user-models';

export const getUserById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const user: any = await UserModel.findById(req.params.id);

    res.status(200).json(user);
    return user;
  } catch {
    const err = userNotFound();

    res.status(err.statusCode).json(err);
  }
};
