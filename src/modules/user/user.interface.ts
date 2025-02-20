import { Model } from 'mongoose';

type TUser = {
  name: string;
  email: string;

  role: 'admin' | 'user';
  isDeleted: boolean;
};

export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser | null>;
}

export default TUser;
