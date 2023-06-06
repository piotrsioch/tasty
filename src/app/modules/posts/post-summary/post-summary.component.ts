import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from "../../../core/api/models/post-dto";

@Component({
  selector: 'tasty-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.scss']
})
export class PostSummaryComponent implements OnInit {
  @Input() public _post!: PostDto;

  constructor() { }

  ngOnInit(): void {
  }

}
