import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent{

progreso1: number =15;

progreso2: number =20;


  get getporcentaje1(){
    return  `${this.progreso1}%`;
  }
  get getporcentaje2(){
    return  `${this.progreso2}%`;
  }
  cambiarValorHijo(valor : number){
    console.log("Rommel", valor)
  }
}
