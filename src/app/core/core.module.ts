import { NgModule } from "@angular/core";
import { RootLayoutComponent } from "./components/root-layout/root-layout.component";
import { RouterLinkActive, RouterOutlet } from "@angular/router";

@NgModule({
  declarations: [
    RootLayoutComponent,
  ],
  imports: [
    RouterOutlet,
    RouterLinkActive,
  ],

  exports: [
    RootLayoutComponent,
  ]
})
export class CoreModule {

}
