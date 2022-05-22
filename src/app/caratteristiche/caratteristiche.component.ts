import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';
import { ServiceService } from '../common/service.service';

@Component({
  selector: 'app-caratteristiche',
  templateUrl: './caratteristiche.component.html',
  styleUrls: ['./caratteristiche.component.css']
})
export class CaratteristicheComponent implements OnInit {

  lista: ListaClassi[] = [];
  id: string;
  name: string = '';
  passaggio: boolean;
  pronto: any;
  roba: any;

  constructor(private lettura: ServiceService) {
    this.id = '';

    for (let i = 0; i < 11; i++) {
      this.lista[i] = new ListaClassi();
    }
  }

  ngOnInit() {}

  richiama(bottone: string) {
    this.id = bottone;
    this.passaggio = true;
    this.name = this.id.toLocaleLowerCase();
    let _this = this;
    this.lettura.charateristics(this.name, _this, function (risultato: any, _this: any){
      _this.roba = risultato;
      _this.passaggio = false;
      _this.passaggio = true;
    });
  }

}