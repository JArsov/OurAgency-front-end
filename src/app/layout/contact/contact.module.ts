import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {ContactRoutingModule} from "./contact-routing.module";
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";

@NgModule({
  imports: [
    CommonModule,
      ContactRoutingModule,
      PageHeaderModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
