import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { SettingComponent } from './setting/setting.component';
import { AdminLayoutComponent } from '../shared/admin/admin-layout/admin-layout.component';
import { ManageCustomerComponent } from './manage-customer/manage-customer.component';
import { AdminHeaderComponent } from '../shared/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from '../shared/admin/admin-footer/admin-footer.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    ManageEmployeeComponent,
    SettingComponent,
    ManageCustomerComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    ManageBookingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
