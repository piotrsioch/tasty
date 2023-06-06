import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { RouterModule, Routes } from "@angular/router";
import { PostSummaryComponent } from './post-summary/post-summary.component';
import { MatIconModule } from "@angular/material/icon";
import { CreatePostComponent } from './create-post/create-post.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: "",
      component: PostsComponent,
    },
    {
      path: ":id",
      component: PostDetailsComponent,
    },
    {
      path: "create-post",
      component: CreatePostComponent,
    }
  ]
}]

@NgModule({
  declarations: [
    PostsComponent,
    PostSummaryComponent,
    CreatePostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  exports: [
    RouterModule
  ]
})
export class PostsModule { }
