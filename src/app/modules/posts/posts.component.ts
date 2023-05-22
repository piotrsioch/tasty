import { Component, OnInit } from '@angular/core';
import { PostControllerService } from "src/app/core/api/services/post-controller.service";
import { Post } from "src/app/core/api/models/post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public _posts: Post[] = [];

  public constructor (
    private readonly _postControllerService: PostControllerService
  ) {
    this._postControllerService.getPosts({ pageSize: 20 }).subscribe(data => {
      this._posts = data;
      console.log(this._posts);
    })
  }

  ngOnInit(): void {
  }

}
