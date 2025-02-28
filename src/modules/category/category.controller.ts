import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import categoryServices from './category.service';

const createCategory = catchAsync(async (req, res) => {
  const categoryInfo = req.body;
  const result = await categoryServices.createCategoryIntoDB(categoryInfo);
  sendResponse(res, {
    statusCode: 201,
    message: 'Category created successfully',
    data: result,
    success: true,
  });
});

const getAllCategories = catchAsync(async (req, res) => {
  const categories = await categoryServices.getAllCategoriesFromDB();
  sendResponse(res, {
    statusCode: 200,
    message: 'All categories fetched successfully',
    data: categories,
    success: true,
  });
});
const deleteCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await categoryServices.deleteCategoryFromDB(id);
  sendResponse(res, {
    message: 'Category deleted successfully',
    statusCode: 200,
    success: true,
    data: result,
  });
});

const categoryControllers = {
  createCategory,
  getAllCategories,
  deleteCategory,
};

export default categoryControllers;
