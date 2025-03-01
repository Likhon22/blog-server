import { model, Schema } from 'mongoose';
import TArticle, { TAdditionalImage } from './article.interface';




const additionalImagesSchema = new Schema<TAdditionalImage>(
  {
    position: { type: Number, required: true },
    url: { type: String, required: true },
    caption: { type: String, required: true },
  },
  { _id: false },
);

const articleSchema = new Schema<TArticle>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    post: { type: String, required: true },
    bannerImg: { type: String, required: true },
    featured: { type: Boolean, default: false },
    additionalImages: [additionalImagesSchema],
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true },
);

const Article = model<TArticle>('Article', articleSchema);

export default Article;
