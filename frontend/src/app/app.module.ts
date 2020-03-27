import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { InputUserDataFormComponent } from './input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  {
    path: 's',
    component: InputUserDataFormComponent
  },
  {
    path: 'user/:uid',
    component: DisplayUserDataComponent
  },
  { path: 'createpost', loadChildren: () => import('./createpost/createpost.module').then(m => m.CreatepostModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
];

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent
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
