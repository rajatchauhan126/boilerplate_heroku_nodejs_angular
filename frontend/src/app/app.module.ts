import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HelplineComponent } from './helpline/helpline.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'helpline', component: HelplineComponent },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DisclaimerComponent,
    HelplineComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
