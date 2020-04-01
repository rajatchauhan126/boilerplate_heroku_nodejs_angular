import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedComponent } from './shared.component';
import { GamesComponent } from './games/games.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: '', component: SharedComponent },
  { path: 'games', component: GamesComponent },
  { path: 'create-post', component: CreatepostComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  declarations: [SharedComponent, GamesComponent, CreatepostComponent, PostsComponent],
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    GamesComponent
  ]
})
export class SharedModule { }
