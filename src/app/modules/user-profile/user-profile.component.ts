import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../authentication/service/auth.service";
import { User } from "./models/user.model";

@Component({
  selector: 'taste-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public currentUser: User | undefined;
  protected selectedOption = "info"

  public constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    })
  }
}
