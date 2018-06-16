import { compareSync, genSalt, hash } from 'bcryptjs';
import { NextFunction } from 'express';
import { model, Schema } from 'mongoose';

import { userSchema } from './user-schema';

// import * as mongoosePaginate from 'mongoose-paginate';
// import * as uniqueValidator from 'mongoose-unique-validator';

const userModel: Schema = new Schema(userSchema, { timestamps: true });

/**
 * Hash password
 */
userModel.pre('save', function(next: NextFunction) {
  if (!this.isModified('password')) return next();
  const self: any = this;
  genSalt(10, function(err: Error, salt: any) {
    hash(self.password, salt, (err: Error, hash: string) => {
      err ? next(err) : (self.password = hash);
      next();
    });
  });
});

/**
 * Compare if password is correct
 */

userModel.methods.comparePassword = function(
  candidatePassword: string,
  cb: any
) {
  return compareSync(candidatePassword, this.password);
};

/**
 * Mongoose Plugins
 * Unique Validator
 * https://github.com/blakehaswell/mongoose-unique-validator
 */

// userModel.plugin(uniqueValidator, {
//   message: 'Error, o {PATH} {VALUE} já esta em uso por outro usuário.',
//   type: 'mongoose-unique-validator'
// });

// export interface IUserModel extends IUser, Document {}
// export interface IUserModel<T extends Document> extends PaginateModel<T> {}

// userModel.plugin(mongoosePaginate);

const UserModel = model('user', userModel);
export default UserModel;
