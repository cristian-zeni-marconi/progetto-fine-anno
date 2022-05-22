import { HttpClient } from '@angular/common/http';
import { ClassField } from '@angular/compiler/src/output/output_ast';
import { ApplicationRef, ChangeDetectorRef, Component, ComponentRef, NgZone, OnInit, Output } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';
import { ServiceService } from '../common/service.service';

@Component({
  template: ''
})
export  class Refresher implements OnInit{    
    constructor(){
      console.log("test");
    }
    ngOnInit() {}
}


@Component({
  selector: 'app-classi',
  templateUrl: './classi.component.html',
  styleUrls: ['./classi.component.css'],
})



export class ClassiComponent implements OnInit {
  lista: ListaClassi[] = [];
  id: string;
  name: string = '';
  passaggio: boolean;
  sonoPronto: any;
  pronto: any;
  roba: any;
  controllo: any;
  refi: Refresher;
  constructor(private ref: ChangeDetectorRef, private lettura: ServiceService) {
    this.id = '';

    this.sonoPronto = false;
    this.lettura.datipronti.subscribe((arrivato) => {
      this.sonoPronto = arrivato;
    });

    

    for (let i = 0; i < 11; i++) {
      this.lista[i] = new ListaClassi();
    }
  }

  ngOnInit() {}

  

  async takeId(bottone: string) {
    this.id = bottone;
    this.name = this.id.toLocaleLowerCase();
    let _this = this;
    this.lettura.levels(this.name, _this, function (risultato: any, _this: any){
      _this.roba = risultato;
      _this.controllo = Object.keys(_this.roba[0].class_specific);
      _this.passaggio = false;
      _this.passaggio = true;
    });    
  }
}
