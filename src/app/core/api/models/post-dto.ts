/* tslint:disable */
/* eslint-disable */
import { CommentDto } from './comment-dto';
import { UserDto } from './user-dto';
export interface PostDto {
  author?: UserDto;
  comments?: Array<CommentDto>;
  content?: string;
  created?: string;
  id?: number;
  title?: string;
  updated?: string;
}
