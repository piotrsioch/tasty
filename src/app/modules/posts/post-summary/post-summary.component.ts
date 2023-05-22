import { Component, Input, OnInit } from '@angular/core';
import { Post } from "src/app/core/api/models/post";

@Component({
  selector: 'tasty-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {
  @Input() public _post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
