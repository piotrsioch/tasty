import {Component, OnInit} from '@angular/core';
import {User} from "../user-profile/models/user.model";
import {AuthService} from "../authentication/service/auth.service";

@Component({
  selector: 'taste-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User | undefined;

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

  constructor(private authService: AuthService) {
  }
}
