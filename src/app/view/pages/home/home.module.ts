import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SafeHtmlPipe } from '../../../safe-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    TranslateModule
  ],
  declarations: [HomePage, SafeHtmlPipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
