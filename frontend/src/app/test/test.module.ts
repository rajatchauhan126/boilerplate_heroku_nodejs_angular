import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';


const routes: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
