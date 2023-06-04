import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'tasty-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent  {
  public constructor() { }

  public recipeForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    shortDescription: new FormControl('', [Validators.required]),
    categories: new FormControl([], [Validators.required]),
    time: new FormControl(0, [Validators.required]),
    difficulty: new FormControl('', [Validators.required]),
  })

  public categoriesList: string[] = ['Soups', 'Salads', 'Sandwiches/Wraps', 'By Meat', 'Pasta, Rice, Grains', 'Italian',
    'Mexican', 'Casseroles', 'Slow Cooker', 'Family Favorites'];
  public difficulties: string[] = ['Easy', 'Medium', 'Hard'];

  public ingredientsList: string[] = [];
  public recipeStepsList: string[] = [];

  public ingredient = new FormControl('', [Validators.required]);
  public step = new FormControl('', [Validators.required]);

  public onAddIngredientClick(): void {
    const ingredient = this.ingredient.value;
    if (ingredient) {
      this.ingredientsList.push(ingredient);
      this.ingredient.reset();
    }
  }

  public onAddStepClick(): void {
    const step = this.step.value;
    if (step) {
      this.recipeStepsList.push(step);
      this.step.reset();
    }
  }

  public onDeleteStepClick(index: number): void {
    this.recipeStepsList.splice(index, 1);
  }

  public onDeleteIngredientClick(index: number): void {
     this.ingredientsList.splice(index, 1);
  }

  public onFormSubmit(): void {
    console.log(this.recipeForm.value);
    console.log(this.recipeStepsList);
    console.log(this.ingredientsList);
  }
}
