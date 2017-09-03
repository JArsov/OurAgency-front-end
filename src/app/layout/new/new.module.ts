import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new.component';
import { NewRoutingModule } from "./new-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
      NewRoutingModule,
      FormsModule
  ],
  declarations: [NewComponent]
})
export class NewModule { }
