/* tslint:disable */
/* eslint-disable */
import { CommentDto } from './comment-dto';
import { UserDto } from './user-dto';
export interface PostDto {
  author?: UserDto;
  comments?: Array<CommentDto>;
  cookingTime?: number;
  created?: string;
  description?: string;
  difficulty?: number;
  id?: number;
  ingredients?: string;
  postPicture?: string;
  shortDescription?: string;
  title?: string;
  updated?: string;
}
