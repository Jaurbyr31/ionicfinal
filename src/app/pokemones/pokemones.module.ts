import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule
  ],
  declarations: [PokemonesPage]
})
export class PokemonesPageModule {}
