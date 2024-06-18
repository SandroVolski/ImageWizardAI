import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GalleryPageRoutingModule } from './gallery-routing.module';

import { GalleryPage } from './gallery.page';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../../safe-html.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalleryPageRoutingModule,
    TranslateModule
  ],
  declarations: [GalleryPage, SafeHtmlPipe]
})
export class GalleryPageModule {}
