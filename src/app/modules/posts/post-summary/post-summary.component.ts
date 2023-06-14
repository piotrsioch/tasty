import { Component, Input } from '@angular/core';
import { PostDto } from "../../../core/api/models/post-dto";
import { Router } from "@angular/router";

@Component({
  selector: 'tasty-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent {
  @Input() public _post!: PostDto;

  public constructor (private _router: Router) {
  }

  public openPostDetails() {
    this._router.navigate(['/posts', this._post.postId]);
  }
}
