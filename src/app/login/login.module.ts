import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {AlertService} from "../shared/services/AlertService";

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    providers: [AlertService],
    declarations: [LoginComponent]
})
export class LoginModule {
}
