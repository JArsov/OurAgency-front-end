import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAdminDetailsComponent } from './edit-admin-details.component';
import { EditAdminDetailsRoutingModule } from "./edit-admin-details-routing.module";
import { DashboardService } from "../dashboard/dashboard.service";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
      EditAdminDetailsRoutingModule,
      FormsModule
  ],
  declarations: [EditAdminDetailsComponent],
    providers: [DashboardService]
})
export class EditAdminDetailsModule { }
