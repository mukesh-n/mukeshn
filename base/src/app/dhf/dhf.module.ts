import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhfRoutingModule } from './dhf-routing.module';
import { DhfComponent } from './dhf.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [DhfComponent, HomeComponent],
  imports: [CommonModule, DhfRoutingModule, SharedModule],
})
export class DhfModule {}
