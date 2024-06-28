import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { GalleryPage } from './gallery.page';
import { TranslateModule } from '@ngx-translate/core';
//import { SafeHtmlPipe } from '../../../safe-html.pipe';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPageRoutingModule,
    SharedModule
    //TranslateModule
  ],
  declarations: [GalleryPage/*, SafeHtmlPipe*/]
})
export class GalleryPageModule {}
