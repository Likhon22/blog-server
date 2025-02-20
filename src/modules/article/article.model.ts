import { model, Schema } from 'mongoose';
import TArticle from './article.interface';

const articleSchema = new Schema<TArticle>(
  {
    category: { type: String, required: true },
    post: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true },
);

const Article = model<TArticle>('Article', articleSchema);

export default Article;
