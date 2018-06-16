export const userSchema = {
  email: {
    index: true,
    required: true,
    unique: true,
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  password: {
    type: String,
    minlength: [6, 'Error, A senha deve conter 6 digitos']
  },
  socialToken: String,
  username: {
    index: true,
    required: true,
    unique: true,
    type: String
  },
  name: String,
  isAccept: {
    type: Boolean,
    default: false
  },
  needChangePassword: {
    type: Boolean,
    default: false
  }
};
