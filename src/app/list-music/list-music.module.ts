import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListMusicPageRoutingModule } from './list-music-routing.module';

import { ListMusicPage } from './list-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListMusicPageRoutingModule
  ],
  declarations: [ListMusicPage]
})
export class ListMusicPageModule {}
