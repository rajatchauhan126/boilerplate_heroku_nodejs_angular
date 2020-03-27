import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListofpostComponent } from './listofpost/listofpost.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, ListofpostComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
