import { use } from 'passport';
import { Strategy } from 'passport-local';

import UserModel from '../../users/models/user-models';

export const LocalPassport = () => {
  use(
    'local',

    new Strategy(async (username: string, password: any, done: Function) => {
      const user: any = await UserModel.findOne({ username });

      if (!user) return done('User error', false);
      if (!user.isActive) return done('User error', false);
      if (!user.comparePassword(password)) return done('User error', false);

      return done(null, user);
    })
  );
};
