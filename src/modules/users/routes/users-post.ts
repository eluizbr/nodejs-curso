import { Request, Response } from 'express';

import UserModel from '../models/user-models';

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await new UserModel(req.body).save();

    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json(err);
  }
};
