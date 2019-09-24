import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sqlite: SQLite
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.createDatabase();
      this.splashScreen.hide();
    });
  }
  private createDatabase(){
    this.sqlite.create({
      name: 'ionic.db',
      location: 'default' // the location field is required
    })
    .then((db: SQLiteObject) => {
       db.executeSql('CREATE TABLE IF NOT EXISTS alunos(id INTEGER PRIMARY KEY AUTOINCREMENT, matricula INTEGER, nome TEXT)', [])
         .then(() => console.log('Criou tabela SQL'))
         .catch(e => console.log(e));
       db.executeSql('INSERT INTO alunos(matricula, nome) VALUES(?,?)', [2019001, 'JOSE']);
       db.executeSql('INSERT INTO alunos(matricula, nome) VALUES(?,?)', [2019002, 'MARIA']);
       db.executeSql('INSERT INTO alunos(matricula, nome) VALUES(?,?)', [2019003, 'ABRAO']);
    })
    .catch(error =>{
      console.error(error);
    });
  }
}
