/* tslint:disable */
/* eslint-disable */
import { CommentDto } from './comment-dto';
import { IngredientDto } from './ingredient-dto';
import { PreparationStepDto } from './preparation-step-dto';
import { UserDto } from './user-dto';
export interface PostDto {
  author?: UserDto;
  comments?: Array<CommentDto>;
  cookingTime?: number;
  created?: string;
  difficulty?: number;
  id?: number;
  ingredients?: Array<IngredientDto>;
  postPicture?: string;
  preparationSteps?: Array<PreparationStepDto>;
  shortDescription?: string;
  title?: string;
  updated?: string;
}
