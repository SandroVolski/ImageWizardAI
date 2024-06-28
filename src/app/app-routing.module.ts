import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./view/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./view/users/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./view/users/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./view/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./view/pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./view/pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'function',
    loadChildren: () => import('./view/pages/function/function.module').then( m => m.FunctionPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./view/users/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./view/users/signup/signup.module').then( m => m.SignupPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
