import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BarchartComponent } from './barchart/barchart.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, FooterComponent, BarchartComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
