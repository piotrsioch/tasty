import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthGuardService } from "./modules/authentication/service/auth-guard.service";

const childrenRoutes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'posts',
  },
]

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    children: childrenRoutes,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {

}
