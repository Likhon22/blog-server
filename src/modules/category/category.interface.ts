import { Model } from 'mongoose';

export type TCategory = {
  _id: string;
  name: string;
};
export interface CategoryModel extends Model<TCategory> {
  isCategoryExists(id: string): Promise<TCategory | null>;
}
