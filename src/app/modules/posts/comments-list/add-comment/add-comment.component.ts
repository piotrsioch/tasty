import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CommentEntityControllerService } from "../../../../core/api/services/comment-entity-controller.service";
import { AuthService } from "../../../authentication/service/auth.service";
import { UserDto } from "../../../../core/api/models/user-dto";
import { PostDto } from "../../../../core/api/models/post-dto";

@Component({
  selector: 'tasty-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {
  @Input() private post: PostDto;
  public commentForm = new FormGroup({
    comment: new FormControl('', Validators.required)
  });
  private user: UserDto;

  public constructor(
    private _authService: AuthService,
    private _postPropertyReferenceControllerService: CommentEntityControllerService,
  ) {
    this._authService.user$.subscribe(user => this.user = user!);
  }

  public addComment(): void {
    if (!this.commentForm.invalid) {
      // this._postPropertyReferenceControllerService.postCollectionResourceCommentPost({
      //   body: {
      //     author: `${ this.user.firstName } ${ this.user.lastName }`,
      //     content: this.commentForm.value.comment!,
      //     post: 'bla',
      //   }
      // })
    }
  }
}
