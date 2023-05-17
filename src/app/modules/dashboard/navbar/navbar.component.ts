import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../authentication/service/auth.service";
import {User} from "../../user-profile/models/user.model";

@Component({
  selector: 'taste-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() currentUser: User | undefined;
  constructor(private router: Router, private authService: AuthService) {
  }

  protected handleOpenUserProfile() {
    this.router.navigate(['/user-profile']);
  }

  protected handleSignOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
