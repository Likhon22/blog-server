/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import User from '../user/user.model';
import TArticle from './article.interface';
import Article from './article.model';
import QueryBuilder from '../../app/builder/QueryBuilder';
import { articleSearchableFields } from './article.constants';

const createArticleIntoDB = async (article: any) => {
  const user = await User.isUserExists(article.authorEmail);

  if (!user) {
    throw new Error('User not found');
  }
  article.author = new mongoose.Types.ObjectId(user._id);
  const result = await Article.create(article);
  return result;
};

const getAllArticlesFromDB = async (queries: Record<string, unknown>) => {
  // Check if filtering by email (author)
  if (queries.email) {
    const user = await User.isUserExists(queries.email as string);
    if (!user) {
      throw new Error('User not found');
    }
    queries.author = user._id;
    delete queries.email;
  }

  const articleQuery = new QueryBuilder(
    Article.find().populate('author'),
    queries,
  )
    .search(articleSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const articles = await articleQuery.modelQuery;
  const meta = await articleQuery.countTotal();
  return { articles, meta };
};
const getSingleArticleFromDB = async (id: string) => {
  const article = await Article.findById(id);
  return article;
};
const updateArticleFromDB = async (id: string, payload: Partial<TArticle>) => {
  const article = await Article.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return article;
};
const deleteArticleFromDB = async (id: string) => {
  const article = await Article.findByIdAndDelete(id);
  return article;
};

const articleServices = {
  createArticleIntoDB,
  getAllArticlesFromDB,
  getSingleArticleFromDB,
  updateArticleFromDB,
  deleteArticleFromDB,
};

export default articleServices;
