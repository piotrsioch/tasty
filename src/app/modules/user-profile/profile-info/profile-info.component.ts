import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../authentication/service/auth.service";
import {User} from "../models/user.model";

@Component({
  selector: 'taste-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  currentUser: User | undefined;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUser;
  }

}
