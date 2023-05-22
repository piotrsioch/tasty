import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "src/app/modules/authentication/service/auth.service";
import {User} from "src/app/modules/user-profile/models/user.model";
import { NavbarMenuItems } from "src/app/core/components/navbar/menu-items";

@Component({
  selector: 'taste-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() currentUser: User | undefined;
  public _menuItems = NavbarMenuItems;

  public constructor (
    private router: Router,
    private authService: AuthService,
  ) {
  }

  protected handleSignOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public navigateToLandingPage() {
    this.router.navigate(['/posts']);
  }
}
