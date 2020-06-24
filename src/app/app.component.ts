import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “Fizz” y, a su vez, los múltiplos de 5 por “Buzz”. Para los números que son múltiplos de 3 y 5 (como 15, 30, etc), utiliza el la palabra “FizzBuzz';
  numeros = new Array<Modelo>();
  ejercicio: number;
   constructor(){
     this.checarMultiplosDe3y5(100);
   }
  checarMultiplosDe3y5(lastNumber: number){
    for (let index = 1; index <= lastNumber; index++) {
      const element = new Modelo();
      element.numero = index;
      if(index % 3 === 0 ){
        element.descripcion = 'FIZZ';
      }
      if(index % 5 === 0 ){
        element.descripcion = element.descripcion + 'Buzz';
      }
      this.numeros.push(element);      
    }
  }
  setEjercicio(e: any){
    this.ejercicio = e;
    console.log(e);
  }
}

export class Modelo{
  numero: number;
  descripcion = '';
}


