import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';
import { ServiceService } from '../common/service.service';

@Component({
  selector: 'app-singole-classi',
  templateUrl: './singole-classi.component.html',
  styleUrls: ['./singole-classi.component.css']
})
export class SingoleClassiComponent implements OnInit {

  img: ListaClassi[] = [];
  @Input() dati: any;
  @Input() pass: boolean;
  @Input() classe: string = "";
  @Input() nome: string;
  @Input() variabili: any;
  test: object;


  constructor() {
    this.pass = false;
    
    for (let i = 0; i < 11; i++) {
      this.img[i] = new ListaClassi();
    }

    
    //this.debug();
  }

  debug(){


    //this.variabili = Object.keys(this.dati[0].class_specific)



    /*
    for(const i in this.test){
      this.variabili = this.test[i];
    }*/

    console.log(this.variabili);

  }

  ngOnInit() {
  }

}