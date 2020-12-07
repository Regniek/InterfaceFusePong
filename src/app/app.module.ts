import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {  FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectComponent } from './components/project/project.component';
import { StorieComponent } from './components/storie/storie.component';
import { TicketComponent } from './components/ticket/ticket.component';

const routesApp: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'storie', component: StorieComponent},
  { path: 'ticket', component: TicketComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProjectComponent,
    StorieComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
