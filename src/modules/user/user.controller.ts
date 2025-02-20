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

const userControllers = {
  createUser,
};

export default userControllers;
