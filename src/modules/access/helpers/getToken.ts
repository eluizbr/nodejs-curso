import { sign } from 'jsonwebtoken';

import { IUser } from '../../users/helpers/user.interface';

/**
 * Seila qualquer coisa descritiva aqui....
 * @author Emerson Luiz
 * @param user - usuario do mongo
 */
export const getToken = async (user?: IUser) => {
  const options = {
    exp: Math.floor((Date.now() / 1000) * 60 * 60),
    expiresIn: '1h',
    algorithm: 'HS256'
  };

  return await sign(options, `${process.env.JWT_SECRET}`);
};
