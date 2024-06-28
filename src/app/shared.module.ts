import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from './safe-html.pipe';

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [CommonModule, TranslateModule],
  exports: [SafeHtmlPipe, TranslateModule]
})
export class SharedModule { }
