import {NgModule} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile.component";
import { ImgListItemComponent } from './recent-posts/img-list-item/img-list-item.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import {MatIconModule} from "@angular/material/icon";
import { UserDetailsComponent } from './user-profile-info/user-details/user-details.component';
import { UserBioComponent } from './user-profile-info/user-bio/user-bio.component';
import { UserMediaComponent } from './user-profile-info/user-media/user-media.component';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';

const routes: Routes = [{
  path: '',
  component: UserProfileComponent,
}]

@NgModule({
  declarations: [
    UserProfileComponent,
    ImgListItemComponent,
    RecentPostsComponent,
    UserDetailsComponent,
    UserBioComponent,
    UserMediaComponent,
    UserProfileInfoComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        NgClass,
        NgIf,
        NgForOf,
        MatIconModule,
    ],
  exports: [
    RouterModule,
  ]
})
export class UserProfileModule { }
