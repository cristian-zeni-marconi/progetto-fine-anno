import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';
import { ServiceService } from '../common/service.service';

@Component({
  selector: 'app-incantesimi',
  templateUrl: './incantesimi.component.html',
  styleUrls: ['./incantesimi.component.css']
})
export class IncantesimiComponent implements OnInit {

  lista: ListaClassi[] = [];
  id: string;
  name: string = '';
  passaggio: boolean;
  pronto: any;
  roba: any;
  controllo: any;
  permesso: boolean;
  stile: string;

  constructor(private lettura: ServiceService) {
    this.id = '';
    this.permesso = false;

    for (let i = 0; i < 11; i++) {
      this.lista[i] = new ListaClassi();
    }
    this.stile = "btn btn-outline-info text-dark ombra";
  }

  ngOnInit() {}

  richiama(bottone: string) {
    this.id = bottone;
    this.passaggio = true;
    this.name = this.id.toLocaleLowerCase();
    let _this = this;
    this.lettura.spells(this.name, _this, function (risultato: any, _this: any){
      _this.roba = risultato;
      _this.passaggio = false;
      _this.passaggio = true;
    });
  }

}