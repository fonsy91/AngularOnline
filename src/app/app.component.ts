import { Component, VERSION } from '@angular/core';
import { articulo } from './articulos.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  nombre: string = '';
  apellido: string = '';
  codigo: string = '';

  //array de articulos (objetos)
  arrayArticulos: articulo[] = [
    new articulo('a01', 'Mesa', 'Interiores', 45),
    new articulo('a02', 'Sofa', 'Interiores', 1400),
    new articulo('a03', 'Silla', 'Interiores', 25),
  ];

  constructor() {}

  registrarUsuario() {
    console.log(
      'El nombre es: ' + this.nombre + ' y el apellido: ' + this.apellido
    );
  }
}
