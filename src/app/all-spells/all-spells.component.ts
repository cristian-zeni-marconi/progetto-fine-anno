import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';
import { ServiceService } from '../common/service.service';

@Component({
  selector: 'app-all-spells',
  templateUrl: './all-spells.component.html',
  styleUrls: ['./all-spells.component.css']
})
export class AllSpellsComponent implements OnInit {

  img: ListaClassi[] = [];
  risul: any;
  @Input() passV: boolean;
  @Input() dati: any;
  @Input() pass: boolean;
  @Input() classe: string = "";
  @Input() nome: string;

  constructor(private secondaria: ServiceService) { }

  chiamata(spell: string){
    
    let _this = this;
    this.secondaria.single(spell, _this, function (risultato: any, _this: any){
      _this.risul = risultato;
      _this.passV = true;
    });
    console.log(this.risul);
    
  }

  ngOnInit() {
  }

}