import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';
import { GamesComponent } from './games/games.component';
import { CreatepostComponent } from './createpost/createpost.component';


const routes: Routes = [
  { path: '', component: SharedComponent },
  { path: 'games', component: GamesComponent },
  { path: 'create-post', component: CreatepostComponent }
];

@NgModule({
  declarations: [SharedComponent, GamesComponent, CreatepostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    GamesComponent
  ]
})
export class SharedModule { }
