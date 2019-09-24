import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }
  lista() {
    return this.sqlite.create({
      name: 'ionic.db',
      location: 'default' // the location field is required
    })
    .then((db: SQLiteObject) => {
      return db.executeSql('SELECT * FROM alunos', [])
      .then(response => {
        let alunos: any[] = [];
        for (let index=0; index < response.rows.length; index++) {
          alunos.push( response.rows.item(index) );
        }
        return alunos;
      })
      .catch(() => console.log('erro ao listar'));
    });
  }
}

