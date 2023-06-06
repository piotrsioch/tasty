/* tslint:disable */
/* eslint-disable */
import { Comment } from './comment';
import { User } from './user';
export interface Post {
  author?: User;
  comments?: Array<Comment>;
  cookingTime?: number;
  created?: string;
  description?: string;
  difficulty?: number;
  id?: number;
  ingredients?: string;
  postPicture?: Array<string>;
  shortDescription?: string;
  title?: string;
  updated?: string;
}
