import { Types } from 'mongoose';
export type TAdditionalImage = {
  position: number;
  url: string;
  caption: string;
};

type TArticle = {
  bannerImg: string;
  title: string;
  category: string;
  post: string;
  featured: boolean;
  additionalImages?: TAdditionalImage[];
  author: Types.ObjectId;
};

export default TArticle;
