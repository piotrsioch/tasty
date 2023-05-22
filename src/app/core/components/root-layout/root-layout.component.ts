import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/modules/authentication/service/auth.service";
import { User } from "src/app/modules/user-profile/models/user.model";

@Component({
  selector: 'taste-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss']
})
export class RootLayoutComponent implements OnInit {
  public currentUser: User | undefined;

  public constructor (
    private readonly _authService: AuthService,
  ) {
  }

  public ngOnInit() {
    this.currentUser = this._authService.currentUser;
  }
}
