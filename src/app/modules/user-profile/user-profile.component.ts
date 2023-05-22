import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../authentication/service/auth.service";
import {User} from "./models/user.model";

@Component({
  selector: 'taste-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  protected selectedOption = "info"
  currentUser: User | undefined;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
  }
}
