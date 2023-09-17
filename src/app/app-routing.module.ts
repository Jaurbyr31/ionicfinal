import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail-noticia',
    loadChildren: () => import('./detail-noticia/detail-noticia.module').then( m => m.DetailNoticiaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'detalle-photo',
    loadChildren: () => import('./detalle-photo/detalle-photo.module').then( m => m.DetallePhotoPageModule)
  },
  {
    path: 'list-music',
    loadChildren: () => import('./list-music/list-music.module').then( m => m.ListMusicPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'pokemones',
    loadChildren: () => import('./pokemones/pokemones.module').then( m => m.PokemonesPageModule)
  },
  {
    path: 'imagenes',
    loadChildren: () => import('./imagenes/imagenes.module').then( m => m.ImagenesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
