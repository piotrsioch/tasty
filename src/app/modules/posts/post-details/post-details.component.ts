import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostControllerService } from "../../../core/api/services/post-controller.service";
import { PostDto } from "../../../core/api/models/post-dto";

@Component({
  selector: 'tasty-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent  {
  public _post: PostDto;
  public _ingredients = ['Onion', 'Egg', 'Mushrooms', 'Cheese', 'Hot water'];
  public _steps = ['Take onion and peel it', 'Clean mushrooms', 'Add cheese',
    'Prepare the onion, add egg, boil in hot water for 30 minutes.', 'Add salt'];
  public _categories = ['Good', 'Polish food', 'Dinner'];

  public constructor(
    private _route: ActivatedRoute,
    private _postControllerService: PostControllerService
  ) { }

  public ngOnInit(): void {
    this._route.params.subscribe(params => {
      const id = parseInt(params['id']);
      this._postControllerService.getPostById({ id: id })
        .subscribe(data => {
          this._post = data;
          this._post.difficulty = 1;
          console.log(this._post);
        });
    })
  }

}
