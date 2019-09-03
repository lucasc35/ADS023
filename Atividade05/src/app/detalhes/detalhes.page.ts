import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
   id=null
  constructor(private activatedRoute: ActivatedRoute) {
   
  }
  
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
