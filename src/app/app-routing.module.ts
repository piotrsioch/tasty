import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {AuthGuardService} from "./modules/authentication/auth-guard.service";

const childrenRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuardService]
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
