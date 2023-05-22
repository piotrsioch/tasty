/* tslint:disable */
/* eslint-disable */
import { Comment } from './comment';
import { User } from './user';
export interface Post {
  author?: User;
  comments?: Array<Comment>;
  content?: string;
  created?: string;
  id?: number;
  title?: string;
  updated?: string;
}
