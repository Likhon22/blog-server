import { model, Schema } from 'mongoose';
import TUser, { UserModel } from './user.interface';

const userSchema = new Schema<TUser, UserModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userImage: { type: String },

    role: {
      type: String,
      enum: ['admin', 'user'],
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

userSchema.statics.isUserExists = async function (email: string) {
  return await User.findOne({ email });
};
const User = model<TUser, UserModel>('User', userSchema);

export default User;
