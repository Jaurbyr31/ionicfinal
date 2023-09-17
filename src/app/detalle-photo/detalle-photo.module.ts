import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePhotoPageRoutingModule } from './detalle-photo-routing.module';

import { DetallePhotoPage } from './detalle-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePhotoPageRoutingModule
  ],
  declarations: [DetallePhotoPage]
})
export class DetallePhotoPageModule {}
