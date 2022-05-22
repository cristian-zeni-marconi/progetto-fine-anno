import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';

@Component({
  selector: 'app-singole-caratteristiche',
  templateUrl: './singole-caratteristiche.component.html',
  styleUrls: ['./singole-caratteristiche.component.css']
})
export class SingoleCaratteristicheComponent implements OnInit {

  img: ListaClassi[] = [];
  @Input() dati: any;
  @Input() pass: boolean;
  @Input() classe: string = "";
  @Input() nome: string;

  constructor() {
    this.pass = false;
    
    for (let i = 0; i < 11; i++) {
      this.img[i] = new ListaClassi();
    }
  }

  ngOnInit() {
  }

}