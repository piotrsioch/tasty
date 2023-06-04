import { Component, Input } from '@angular/core';
import { UserDto } from "../../../../core/api/models/user-dto";

@Component({
  selector: 'tasty-user-media',
  templateUrl: './user-media.component.html',
  styleUrls: ['./user-media.component.scss']
})
export class UserMediaComponent {
  @Input() public user: UserDto | undefined;
}
