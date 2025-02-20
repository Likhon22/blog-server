import { Types } from 'mongoose';

type TLike = {
  post: Types.ObjectId;
  user: Types.ObjectId;
};

export default TLike;
