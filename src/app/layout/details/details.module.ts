import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from "./details-routing.module";
import {DashboardService} from "../dashboard/dashboard.service";

@NgModule({
  imports: [
    CommonModule,
      DetailsRoutingModule
  ],
  declarations: [DetailsComponent],
    providers: [DashboardService]
})
export class DetailsModule { }
