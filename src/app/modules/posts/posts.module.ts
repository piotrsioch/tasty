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
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comments-list/comment/comment.component';
import { AddCommentComponent } from './comments-list/add-comment/add-comment.component';
import { MatDividerModule } from "@angular/material/divider";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: "",
      component: PostsComponent,
    },
    {
      path: "create-post",
      component: CreatePostComponent,
    },
    {
      path: ":id",
      component: PostDetailsComponent,
    }
  ]
}]

@NgModule({
  declarations: [
    PostsComponent,
    PostSummaryComponent,
    CreatePostComponent,
    PostDetailsComponent,
    CommentsListComponent,
    CommentComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
  ],
  exports: [
    RouterModule
  ]
})
export class PostsModule { }
