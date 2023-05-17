import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './navbar/search-bar/search-bar.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
}]

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    SearchBarComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardModule {

}
