import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = '';
  total = '';
  numeros = new Array<Modelo>();
  ejercicio: number;
  esPalidromoDes = '';
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
  setEjercicio(e: number){
    this.ejercicio = e;
     switch (e) {
     case 1:
       this.name = 'Probar si una palabra es palíndromo o no'; 
       break;
     case 2:
       this.name = 'Muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “Fizz” y, a su vez, los múltiplos de 5 por “Buzz”. Para los números que son múltiplos de 3 y 5 (como 15, 30, etc), utiliza el la palabra “FizzBuzz”'; 
       break;  
     case 3:
       this.name = 'Calcula el ahorro por dias consecutivos';
       break;
     default:
       break;
   }
  }
  esPalindromo(valor: string){
    if(valor){
      valor.trim();
      this.esPalidromoDes = this.verificaSiEsPalindromo(valor);

    }else{
      this.esPalidromoDes = '';
    }
  }
  verificaSiEsPalindromo(valor: string) :string {
    let aux = '';
    const longitud = valor.length - 1;
    const arrChar = valor.split('');
    for (let index = longitud; index >= 0; index--) {
      aux = aux + arrChar[index];
    }
    return valor === aux ? 'SI' : 'NO';
  }
  calcular(valor: any){
    if(!isNaN(Number(valor))){
      const dias = Number(valor);
      const total = (dias * (dias + 1)) / 2;
      this.total = `Total: ${'$' + total}`;
    } else{
      this.total = '';
    }
  }
}
export class Modelo{
  numero: number;
  descripcion = '';
}


