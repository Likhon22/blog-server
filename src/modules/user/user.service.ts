import QueryBuilder from '../../app/builder/QueryBuilder';
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
const loginUserIntoDB = async (userInfo: TUser) => {
  let user = await User.findOne({ email: userInfo.email });
  if (!user) {
    userInfo.role = 'user';
    user = await User.create(userInfo);
  }

  return user;
};
const getAllUserFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .filter()
    .sort()
    .paginate();
  const user = await userQuery.modelQuery;
  return user;
};
const getSingleUserFromDB = async (email: string) => {
  const isUserExists = await User.isUserExists(email);
  if (!isUserExists) {
    throw new AppError(404, 'User not found');
  }
  return isUserExists;
};
const updateUserRoleInDB = async (
  userId: string,
  role: string,
  email: string,
) => {
  const isUserExists = await User.isUserExists(email);
  if (isUserExists?.role !== 'admin') {
    throw new AppError(403, 'You are not authorized to update role');
  }
  const user = await User.findByIdAndUpdate(
    { _id: userId },
    { role },
    { new: true },
  );
  return user;
};
const userServices = {
  createUserIntoDB,
  loginUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserRoleInDB,
};

export default userServices;
