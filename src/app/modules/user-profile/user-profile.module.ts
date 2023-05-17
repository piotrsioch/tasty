import {NgModule} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile.component";
import {ProfileInfoComponent} from './profile-info/profile-info.component';

const routes: Routes = [{
  path: '',
  component: UserProfileComponent,
}]

@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileInfoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    NgClass,
    NgIf,
  ],
  exports: [
    RouterModule,
  ]
})
export class UserProfileModule { }
