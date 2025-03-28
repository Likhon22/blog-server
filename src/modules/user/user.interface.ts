import { Model } from 'mongoose';

type TUser = {
  _id: string;
  name: string;
  email: string;
  userImage?: string;
  role: 'admin' | 'user';
  isDeleted: boolean;
};

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser | null>;
}

export default TUser;
