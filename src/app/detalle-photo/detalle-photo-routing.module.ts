import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePhotoPage } from './detalle-photo.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePhotoPageRoutingModule {}
