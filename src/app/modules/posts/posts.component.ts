import { Component } from '@angular/core';
import { PostControllerService } from "src/app/core/api/services/post-controller.service";
import { Post } from "src/app/core/api/models/post";
import { Router } from "@angular/router";

@Component({
  selector: 'tasty-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public _posts: Post[] = [];

  public constructor (
    private readonly _postControllerService: PostControllerService,
    private readonly _router: Router,
  ) {
    this._postControllerService.getPosts({ pageSize: 20 }).subscribe(data => {
      this._posts = data;
    })
  }

  public navigateToCreatePost(): void {
    this._router.navigate(['posts/create-post']);
  }
}
