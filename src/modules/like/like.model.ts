import { model, Schema } from 'mongoose';
import TLike from './like.interface';

const likeSchema = new Schema<TLike>(
  {
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);

const Like = model<TLike>('Like', likeSchema);

export default Like;
