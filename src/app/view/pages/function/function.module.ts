import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunctionPageRoutingModule } from './function-routing.module';

import { FunctionPage } from './function.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunctionPageRoutingModule
  ],
  declarations: [FunctionPage]
})
export class FunctionPageModule {}
