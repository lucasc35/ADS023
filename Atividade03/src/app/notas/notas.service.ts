import { Nota } from './nota.model';
import { NotasPage } from './notas.page';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
 private notas: Nota[] = [
    {
      disciplina: 'ADS023 - Programação para Dispositivos Móveis',
      a1: '5,0',
      a2: '-',
      a3: '5,0',
      edad: '0,0',
      media: '5,0'
    },
  
    {
      disciplina: 'RCT024 - Gerência de Projetos',
      a1: '4,0',
      a2: '6,0',
      a3: '-',
      edad: '10,0',
      media: '5,0'
    },
  ];
  getNotas() {
    return [...this.notas];
  }
  constructor() { }
}
