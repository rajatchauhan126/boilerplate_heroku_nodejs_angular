import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { CoviddataComponent } from './coviddata/coviddata.component';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'covid', component: CoviddataComponent }
];

@NgModule({
  declarations: [AdminComponent, CoviddataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
