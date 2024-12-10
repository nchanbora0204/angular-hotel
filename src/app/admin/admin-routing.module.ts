import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { SettingComponent } from './setting/setting.component';
import { AdminLayoutComponent } from '../shared/admin/admin-layout/admin-layout.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'bookingmagage', component: ManageBookingComponent},
      { path: 'customer', component: ManageCustomerComponent },
      { path: 'employee', component: ManageEmployeeComponent },
      { path: 'setting', component: SettingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
