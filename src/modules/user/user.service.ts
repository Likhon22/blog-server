import AppError from '../../app/error/AppError';
import TUser from './user.interface';
import User from './user.model';

const createUserIntoDB = async (userInfo: TUser) => {
  const isUserExists = await User.isUserExists(userInfo.email);
  if (isUserExists) {
    throw new AppError(400, 'User already exists');
  }
  userInfo.role = 'user';
  const user = await User.create(userInfo);
  return user;
};

const userServices = {
  createUserIntoDB,
};

export default userServices;
