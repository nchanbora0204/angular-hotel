import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'rooms', component: ManageRoomsComponent },
  { path: 'bookings', component: ManageBookingsComponent },
  { path: 'users', component: ManageUsersComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
