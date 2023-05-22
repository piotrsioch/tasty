import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { RouterModule, Routes } from "@angular/router";
import { PostSummaryComponent } from './post-summary/post-summary.component';
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [{
  path: '',
  component: PostsComponent,
}]

@NgModule({
  declarations: [
    PostsComponent,
    PostSummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ]
})
export class PostsModule { }
