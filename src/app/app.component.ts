import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  nombre: string = '';
  apellido: string = '';

  constructor() {}

  registrarUsuario() {
    console.log(
      'El nombre es: ' + this.nombre + ' y el apellido: ' + this.apellido
    );
  }
}
