export class articulo {
  //atributos de clase
  codigo: string = '';
  nombre: string = '';
  seccion: string = '';
  precio: number = 0;

  constructor(codigo: string, nombre: string, seccion: string, precio: number) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.seccion = seccion;
    this.precio = precio;
  }
}
