import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent{


progreso: number = 50;


get getporcentaje(){
  return  `${this.progreso}%`;
}

cambiarValor(valor : number):number{
  if (this.progreso >= 100 && valor >=0){
    return this.progreso = 100;
  }
  if (this.progreso <= 0 && valor <0){
    return this.progreso = 0;
  }
 return this.progreso = this.progreso +valor;
}

}
