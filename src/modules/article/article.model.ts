import { model, Schema } from 'mongoose';
import TArticle from './article.interface';

const articleSchema = new Schema<TArticle>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true, unique: true },
    post: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true },
);

const Article = model<TArticle>('Article', articleSchema);

export default Article;
