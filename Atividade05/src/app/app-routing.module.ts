import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'detalhes/:id', loadChildren:'./detalhes/detalhes.module#DetalhesPageModule'},
  { path: 'abas', loadChildren: './abas/abas.module#AbasPageModule' },
  { path: 'aba1', loadChildren: './abas/aba1/aba1.module#Aba1PageModule' },
  { path: 'aba2', loadChildren: './abas/aba2/aba2.module#Aba2PageModule' },
  { path: 'aba3', loadChildren: './abas/aba3/aba3.module#Aba3PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
