import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FunctionPageRoutingModule } from './function-routing.module';

import { FunctionPage } from './function.page';

import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FunctionPageRoutingModule,
    TranslateModule
  ],
  declarations: [FunctionPage, SafeHtmlPipe]
})
export class FunctionPageModule {}
