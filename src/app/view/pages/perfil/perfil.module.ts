import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

import { TranslateModule } from '@ngx-translate/core';
//import { SafeHtmlPipe } from '../../../safe-html.pipe';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    SharedModule
    //TranslateModule
  ],
  declarations: [PerfilPage/*, SafeHtmlPipe*/]
})
export class PerfilPageModule {}
