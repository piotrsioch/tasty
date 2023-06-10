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
          console.log(data);
        });
    })
  }

}
