import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ListaClassi } from '../common/lista-classi';
import { ServiceService } from '../common/service.service';

@Component({
  selector: 'app-single-spells',
  templateUrl: './single-spells.component.html',
  styleUrls: ['./single-spells.component.css']
})
export class SingleSpellsComponent implements OnInit {

  @Input() incantesimo: any;
  @Input() ctr: boolean;

  constructor() {

  }

  ngOnInit() {
  }

}