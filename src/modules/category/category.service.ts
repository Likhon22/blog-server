import AppError from '../../app/error/AppError';
import { TCategory } from './category.interface';
import Category from './category.model';

const createCategoryIntoDB = async (category: TCategory) => {
  const isCategoryExists = await Category.isCategoryExists(category._id);
  if (isCategoryExists) {
    throw new AppError(400, 'Category already exists');
  }
  const result = await Category.create(category);
  return result;
};

const getAllCategoriesFromDB = async () => {
  const categories = await Category.find();
  return categories;
};
const deleteCategoryFromDB = async (id: string) => {
  const category = await Category.findByIdAndDelete(id);
  return category;
};

const categoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  deleteCategoryFromDB,
};

export default categoryServices;
