import { Component } from '@angular/core';
import { AuthService } from "../../authentication/service/auth.service";
import { User } from "../models/user.model";

@Component({
  selector: 'taste-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {
  public currentUser: User | undefined;

  public constructor(private authService: AuthService) {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    })
  }
}
