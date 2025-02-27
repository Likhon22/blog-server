import { model, Schema } from 'mongoose';
import { CategoryModel, TCategory } from './category.interface';

const categorySchema = new Schema<TCategory, CategoryModel>({
  name: { type: String, required: true, unique: true },
});
categorySchema.statics.isCategoryExists = (id: string) => {
  Category.findOne({ _id: id });
};
const Category = model<TCategory, CategoryModel>('Category', categorySchema);

export default Category;
