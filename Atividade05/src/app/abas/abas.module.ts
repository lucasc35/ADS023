import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbasPage } from './abas.page';

const routes: Routes = [
  {
    path: '',
    component: AbasPage,
    children: [
      {
        path: 'aba1',
        loadChildren: './aba1/aba1.module#Aba1PageModule'
      },
      {
        path: 'aba2',
        loadChildren: './aba2/aba2.module#Aba2PageModule'    
      },
      {
        path: 'aba3',
       loadChildren: './aba3/aba3.module#Aba3PageModule'
        
      },
      { path: '', redirectTo: '/abas/aba1', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbasPage]
})
export class AbasPageModule { }
