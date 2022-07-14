import { Component, VERSION } from '@angular/core';
import { articulo } from './articulos.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  codigo: string = '';
  nombre: string = '';
  seccion: string = '';
  precio: number = 0;

  mensajePadre = 'Hola hijo';

  //array de articulos (objetos)
  arrayArticulos: articulo[] = [
    new articulo('a01', 'Mesa', 'Interiores', 45),
    new articulo('a02', 'Sofa', 'Interiores', 1400),
    new articulo('a03', 'Silla', 'Interiores', 25),
  ];

  constructor() {}

  registrarUsuario() {
    //agregamos objetos a la estructura pero no son definitivos
    let ObjArticulo = new articulo(
      this.codigo,
      this.nombre,
      this.seccion,
      this.precio
    );
    //Introducimos dicho empleado en el array
    this.arrayArticulos.push(ObjArticulo);
  }
}
