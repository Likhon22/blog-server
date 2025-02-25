import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import userServices from './user.service';

const createUser = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const user = await userServices.createUserIntoDB(userInfo);
  sendResponse(res, {
    message: 'User created successfully',
    statusCode: 201,
    success: true,
    data: user,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const user = await userServices.loginUserIntoDB(userInfo);
  sendResponse(res, {
    message: 'User logged in successfully',
    statusCode: 200,
    success: true,
    data: user,
  });
});
const userControllers = {
  createUser,
  loginUser,
};

export default userControllers;
