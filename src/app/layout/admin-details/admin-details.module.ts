import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminDetailsComponent} from './admin-details.component';
import {AdminDetailsRoutingModule} from "./admin-details-routing.module";
import {DashboardService} from "../dashboard/dashboard.service";

@NgModule({
    imports: [
        CommonModule,
        AdminDetailsRoutingModule
    ],
    declarations: [AdminDetailsComponent],
    providers: [DashboardService]
})
export class AdminDetailsModule {}
