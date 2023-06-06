import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'tasty-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent  {
  public id: string;

  public constructor(private _route: ActivatedRoute) { }

  public ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

}
