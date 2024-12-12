import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from '../core/interceptor/http.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    RoomListComponent,
    RoomDetailComponent,
    AboutComponent,
    ContactComponent,
    BookingComponent,
    LoginComponent,
    RegisterComponent
  ],

  providers: [
    provideHttpClient(withInterceptors([httpInterceptor]))
  ],
  imports: [
   
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule
  ],
  exports: [ 
    RegisterComponent,
    LoginComponent
  ]
})
export class UserModule { }
