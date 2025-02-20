import { model, Schema } from 'mongoose';
import TComment from './comment.interface';

const modelSchema = new Schema<TComment>(
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
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Comment = model<TComment>('Comment', modelSchema);

export default Comment;
