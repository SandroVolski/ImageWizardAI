import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FunctionPage } from './function.page';

const routes: Routes = [
  {
    path: '',
    component: FunctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FunctionPageRoutingModule {}
