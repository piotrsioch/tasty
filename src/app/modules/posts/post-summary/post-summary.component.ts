import { Component, Input } from '@angular/core';
import { PostDto } from "../../../core/api/models/post-dto";
import { Router } from "@angular/router";
import { FavouritePostControllerService } from "../../../core/api/services/favourite-post-controller.service";

@Component({
  selector: 'tasty-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent {
  @Input() public _post!: PostDto;

  public constructor (
    private _router: Router,
    private _favouritePostControllerService: FavouritePostControllerService,
  ) {
  }

  public openPostDetails() {
    this._router.navigate(['/posts', this._post.id]);
  }

  public addPostToFavourites(): void {
    if (!this._post.isLikedByUser) {
      this._favouritePostControllerService.likePost( { id: this._post.id! }).subscribe();
    } else {
      this._favouritePostControllerService.unlike( { id: this._post.id! }).subscribe()
    }
  }
}
