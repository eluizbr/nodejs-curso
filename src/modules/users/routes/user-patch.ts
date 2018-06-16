import { genSalt, hash } from 'bcryptjs';
import { Request, Response } from 'express';

import UserModel from '../models/user-models';

export const updateUser = async (req: Request, res: Response) => {
  if (req.body.password && req.body.password.length >= 6) {
    const salt = await genSalt(10);
    req.body.password = await hash(req.body.password, salt);
  }

  const options = { new: true };

  try {
    const user: any = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    const data = {
      title: 'Sucesso',
      message: `O usuário ${user.name}, foi atualizado com sucesso.`
    };

    res.status(200).json(user);
  } catch {
    const data = {
      type: 'error',
      title: 'Error',
      message: `O usuário não foi encontrado`
    };

    res.status(200).json(data);
  }
};
