import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  datipronti = new Subject();
  risultato: any;

  constructor(private miohttp: HttpClient) {}

  levels(classe: string, _this: any ,func: Function) {
    this.miohttp
      .get('https://www.dnd5eapi.co/api/classes/' + classe + '/levels')
      .subscribe((dati) => {
        console.log(dati);
        this.datipronti.next(true);

        this.risultato = dati;
        func(this.risultato, _this);
      });
    return this.risultato;
  }

  charateristics(classe: string, _this: any, func: Function) {
    this.miohttp
      .get('https://www.dnd5eapi.co/api/classes/' + classe)
      .subscribe((dati) => {
        console.log(dati);

        this.datipronti.next(true);

        this.risultato = dati;
        func(this.risultato, _this);
      });
    return this.risultato;
  }

  spells(classe: string, _this: any, func: Function) {
    this.miohttp
      .get('https://www.dnd5eapi.co/api/classes/' + classe + '/spells')
      .subscribe((dati) => {
        console.log(dati);

        this.datipronti.next(true);

        this.risultato = dati;
        func(this.risultato, _this);
      });
    return this.risultato;
  }

  single(spell: string, _this: any, func: Function) {
    this.miohttp
      .get('https://www.dnd5eapi.co/api/spells/' + spell)
      .subscribe((dati) => {
        console.log(dati);

        this.datipronti.next(true);

        this.risultato = dati;
        func(this.risultato, _this);
      });
    return this.risultato;
  }
}
