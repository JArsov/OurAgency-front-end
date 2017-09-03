import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminAuthGuard } from "../../shared/guards/admin-auth.guard";
import { DashboardService } from "../dashboard/dashboard.service";

@NgModule({
  imports: [
    CommonModule,
      AdminRoutingModule
  ],
  declarations: [AdminComponent],
    providers: [AdminAuthGuard, DashboardService]
})
export class AdminModule {}
