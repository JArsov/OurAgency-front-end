import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from "../../shared/guards/admin-auth.guard";

const routes: Routes = [
    { path: '', component: AdminComponent, canActivate: [AdminAuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
