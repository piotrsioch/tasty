import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
  path: '',
  component: PostsComponent,
}]

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PostsModule { }
