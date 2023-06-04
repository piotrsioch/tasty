import { Component, Input } from '@angular/core';
import { UserDto } from "../../../../core/api/models/user-dto";

@Component({
  selector: 'tasty-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.scss']
})
export class UserBioComponent {
  @Input() public user: UserDto | undefined;
}
