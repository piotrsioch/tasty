import { Component, Input } from '@angular/core';
import { UserDto } from "../../../../core/api/models/user-dto";

@Component({
  selector: 'tasty-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input() public user: UserDto | undefined;

   get userFullName(): string {
    return this.user?.firstName + " " + this.user?.middleName + " " + this.user?.lastName;
  }

}
