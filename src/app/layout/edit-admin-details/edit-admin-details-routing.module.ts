import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAdminDetailsComponent } from "./edit-admin-details.component";


const routes: Routes = [
    { path: '', component: EditAdminDetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditAdminDetailsRoutingModule { }
