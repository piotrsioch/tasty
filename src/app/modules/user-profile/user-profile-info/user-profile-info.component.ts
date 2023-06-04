import { Component, OnInit } from '@angular/core';
import { UserDto } from "../../../core/api/models/user-dto";
import { AuthService } from "../../authentication/service/auth.service";

@Component({
  selector: 'tasty-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss']
})
export class UserProfileInfoComponent implements OnInit {
  public currentUser: UserDto | undefined;

  public constructor (
    private authService: AuthService,
  ) {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    })
  }

  public ngOnInit(): void {
    this.loadCurrentUser();
  }

  private loadCurrentUser() {
    // call service to fetch user details
  }
}
