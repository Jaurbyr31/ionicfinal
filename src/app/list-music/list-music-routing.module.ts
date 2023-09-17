import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListMusicPage } from './list-music.page';

const routes: Routes = [
  {
    path: '',
    component: ListMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListMusicPageRoutingModule {}
