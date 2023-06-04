import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../authentication/service/auth.service";
import { UserDto } from "src/app/core/api/models/user-dto";

@Component({
  selector: 'taste-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public currentUser: UserDto | undefined;

  public constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.authService.user$.subscribe(user => {
      this.currentUser = user;
    })
  }
}
