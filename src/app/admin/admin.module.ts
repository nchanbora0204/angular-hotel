import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageRoomsComponent } from './manage-rooms/manage-rooms.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ManageRoomsComponent,
    ManageBookingsComponent,
    ManageEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
