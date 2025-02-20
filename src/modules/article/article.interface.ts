import { Types } from 'mongoose';

type TArticle = {
  category: string;
  post: string;
  author: Types.ObjectId;
};

export default TArticle;
