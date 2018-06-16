import { Request, Response } from 'express';

import UserModel from '../models/user-models';

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<any> => {
  const user: any = await UserModel.find({});
  res.status(200).json(user);
};
