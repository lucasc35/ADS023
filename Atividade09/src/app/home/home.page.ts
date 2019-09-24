import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private ds: DatabaseService) {}
  alunos: any[] = [];

  getAlunos() {
    this.ds.lista()
    .then((alunos: any[]) => {
      this.alunos = alunos;
    })
    .catch(error => {
      console.error( error );
    });
  }

}
