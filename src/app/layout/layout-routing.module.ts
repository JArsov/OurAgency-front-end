import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AdminAuthGuard} from "../shared/guards/admin-auth.guard";

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule',
                canActivate: [AdminAuthGuard]
            },
            {
                path: 'admin-details',
                loadChildren: './admin-details/admin-details.module#AdminDetailsModule',
                canActivate: [AdminAuthGuard]
            },
            {
                path: 'edit/:id',
                loadChildren: './edit-admin-details/edit-admin-details.module#EditAdminDetailsModule',
                canActivate: [AdminAuthGuard]
            },
            {
                path: 'details/:id',
                loadChildren: './details/details.module#DetailsModule'
            },
            {
                path: 'new',
                loadChildren: './new/new.module#NewModule'
            },
            {
                path: 'about',
                loadChildren: './about/about.module#AboutModule'
            },
            {
                path: 'contact',
                loadChildren: './contact/contact.module#ContactModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
