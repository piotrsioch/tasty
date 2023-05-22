import {Component, OnInit} from '@angular/core';
import {User} from "../user-profile/models/user.model";
import {AuthService} from "../authentication/service/auth.service";
import { PostEntityControllerService } from "src/app/core/api/services/post-entity-controller.service";
import { tap } from "rxjs";
import jwt_decode from "jwt-decode";
import { HttpClient } from "@angular/common/http";
import { PostControllerService } from "src/app/core/api/services/post-controller.service";

@Component({
  selector: 'taste-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public currentUser: User | undefined;

  public constructor(
    private readonly _authService: AuthService,
    private readonly _postControllerService: PostControllerService,
  ) {
    this._postControllerService.getPosts({pageSize: 20}).subscribe(x => console.log(x))
  }

  public ngOnInit() {
    this.currentUser = this._authService.currentUser;
  }
}
