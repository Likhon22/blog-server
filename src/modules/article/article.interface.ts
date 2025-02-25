import { Types } from 'mongoose';

type TArticle = {
  title: string;
  category: string;
  post: string;
  author: Types.ObjectId;
};

export default TArticle;
