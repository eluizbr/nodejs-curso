import { NextFunction, Request, Response } from 'express';
import { authenticate } from 'passport';

import { getToken } from '../helpers/getToken';
import { LocalPassport } from '../helpers/localPassport';

LocalPassport();

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  authenticate('local', (err, user) => {
    if (err) return res.status(404).json(err);
    if (!user) return res.status(404).json('User not found!');

    req.login(user, err, async () => {
      if (err) return res.status(404).json(err);
      const token = await getToken();
      const data = {
        email: `${user.email}`,
        nome: `${user.name}`
      };

      res.status(200).json({ token, data });
    });
  })(req, res, next);
};
