import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonesPage } from './pokemones.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonesPageRoutingModule {}
