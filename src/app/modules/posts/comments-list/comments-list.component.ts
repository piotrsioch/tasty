import { Component, Input } from '@angular/core';
import { PostDto } from "../../../core/api/models/post-dto";

@Component({
  selector: 'tasty-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent {
  @Input() public post: PostDto;
}
