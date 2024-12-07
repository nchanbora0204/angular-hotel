import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'rooms', component: ManageRoomsComponent },
  { path: 'bookings', component: ManageBookingsComponent },
  { path: 'employee', component: ManageEmployeeComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
