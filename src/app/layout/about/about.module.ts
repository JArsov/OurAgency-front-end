import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from "./about-routing.module";
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
      Ng2Charts,
      StatModule,
      AboutRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
