import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';
import { GamesComponent } from './games/games.component';
import { BarchartComponent } from './barchart/barchart.component';


const routes: Routes = [
  { path: '', component: SharedComponent },
  { path: 'games', component: GamesComponent }
];

@NgModule({
  declarations: [SharedComponent, GamesComponent, BarchartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    GamesComponent
  ]
})
export class SharedModule { }
