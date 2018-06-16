import { Request, Response } from 'express';

// declare module 'express' {
//   interface Request {
//     logout: any;
//   }
// }

export const logout = (req: Request, res: Response) => {
  // req.logout();

  res.status(200).json({
    statusCode: 200,
    message: 'Logout ok!'
  });
};
