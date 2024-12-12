import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { RoomListComponent } from './room-list/room-list.component';
import { LayoutComponent } from '../shared/user/layout/layout.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { LoginComponent } from './login/login.component';
import { gustGuard } from '../core/guards/gust.guard';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: HomeComponent},
        { path: 'about', component: AboutComponent},
        { path: 'booking', component: BookingComponent},
        { path: 'contact', component: ContactComponent},
        { path: 'rooms', component: RoomListComponent},
        { path: 'room-detail', component: RoomDetailComponent}
      ],   
    },
    {
      path: 'login', 
      component: LoginComponent,
      canActivate: [gustGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
