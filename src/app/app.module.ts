import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { LoginModule } from "./modules/login/login.module";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    DashboardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
