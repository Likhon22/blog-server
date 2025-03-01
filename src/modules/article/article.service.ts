/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import User from '../user/user.model';
import TArticle from './article.interface';
import Article from './article.model';
import QueryBuilder from '../../app/builder/QueryBuilder';
import { articleSearchableFields } from './article.constants';
import AppError from '../../app/error/AppError';

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
  const article = await Article.findById(id).populate('author');
  return article;
};
const updateArticleFromDB = async (id: string, payload: Partial<TArticle>) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    if (payload.featured) {
      const articles = await Article.find({ featured: true }).session(session);
      for (const article of articles) {
        article.featured = false;
        await article.save({ session });
      }
    }

    const article = await Article.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
      session,
    });

    await session.commitTransaction();
    session.endSession();
    return article;
  } catch (error) {
    await session.abortTransaction(); // Rollback changes
    session.endSession();

    throw new AppError(400, 'Failed to update article');
  }
};
const deleteArticleFromDB = async (id: string) => {
  const article = await Article.findByIdAndDelete(id);
  return article;
};
const getFeaturedArticleFromDB = async () => {
  const article = await Article.findOne({ featured: true }).populate('author');
  return article;
};

const articleServices = {
  createArticleIntoDB,
  getAllArticlesFromDB,
  getSingleArticleFromDB,
  updateArticleFromDB,
  deleteArticleFromDB,
  getFeaturedArticleFromDB,
};

export default articleServices;
