import { Request, Response } from 'express';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import userServices from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const userInfo = req.body;
  const user = await userServices.createUserIntoDB(userInfo);
  sendResponse(res, {
    message: 'User created successfully',
    statusCode: 201,
    success: true,
    data: user,
  });
});
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const userInfo = req.body;
  const user = await userServices.loginUserIntoDB(userInfo);
  sendResponse(res, {
    message: 'User logged in successfully',
    statusCode: 200,
    success: true,
    data: user,
  });
});
const getUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await userServices.getAllUserFromDB(req.query);
  sendResponse(res, {
    message: 'All users fetched successfully',
    statusCode: 200,
    success: true,
    data: users,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.params;
  const user = await userServices.getSingleUserFromDB(email);
  sendResponse(res, {
    message: 'User fetched successfully',
    statusCode: 200,
    success: true,
    data: user,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { role, email } = req.body;

  const user = await userServices.updateUserRoleInDB(userId, role, email);
  sendResponse(res, {
    message: 'User role updated successfully',
    statusCode: 200,
    success: true,
    data: user,
  });
});
const userControllers = {
  createUser,
  loginUser,
  getUsers,
  getSingleUser,
  updateUser,
};

export default userControllers;
