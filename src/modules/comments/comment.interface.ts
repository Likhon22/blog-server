import { Types } from 'mongoose';

type TComment = {
  post: Types.ObjectId;
  user: Types.ObjectId;
  comment: string;
};

export default TComment;
