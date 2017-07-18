import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {AdminAuthGuard} from "../../shared/guards/admin-auth.guard";

@NgModule({
  imports: [
    CommonModule,
      AdminRoutingModule
  ],
  declarations: [AdminComponent],
    providers: [AdminAuthGuard]
})
export class AdminModule {}
