/* tslint:disable */
/* eslint-disable */
import { CommentDto } from './comment-dto';
import { IngredientDto } from './ingredient-dto';
import { PreparationStepDto } from './preparation-step-dto';
import { ProductCategoryDto } from './product-category-dto';
import { UserDto } from './user-dto';
export interface PostDto {
  author?: UserDto;
  categories?: Array<ProductCategoryDto>;
  comments?: Array<CommentDto>;
  cookingTime?: number;
  category?: string;
  created?: string;
  difficulty?: number;
  postId?: number;
  ingredients?: Array<IngredientDto>;
  isLikedByUser?: boolean;
  numberOfLikes?: number;
  postPicture?: string;
  preparationSteps?: Array<PreparationStepDto>;
  shortDescription?: string;
  title?: string;
  updated?: string;
}
