import mongoose from 'mongoose';
import User from '../user/user.model';
import TArticle from './article.interface';
import Article from './article.model';

const createArticleIntoDB = async (article) => {
  const user = await User.isUserExists(article.authorEmail);

  if (!user) {
    throw new Error('User not found');
  }
  article.author = new mongoose.Types.ObjectId(user._id);
  const result = await Article.create(article);
  return result;
};

const getAllArticlesFromDB = async () => {
  const articles = await Article.find();
  return articles;
};
const getSingleArticleFromDB = async (id: string) => {
  const article = await Article.findById(id);
  return article;
};

const articleServices = {
  createArticleIntoDB,
  getAllArticlesFromDB,
  getSingleArticleFromDB,
};

export default articleServices;
