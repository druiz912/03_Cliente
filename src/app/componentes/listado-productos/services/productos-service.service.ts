import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataServices } from 'src/app/data.service';
import { Productos } from '../productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  Productos: any;
  //Objeto que me permite comunicarme mediante HTTP
  constructor(private clienteHttp: HttpClient, private dataService: DataServices) { 
    this.Productos = Productos;
  }
  //Promise signfica promesa, cuando le llame no me espero a que responda; mecanismo de promesas, es programación asíncrona
  getProductos() {
    return this.clienteHttp.get<any[]>("http://localhost:8080/productos/json")
    
    this.dataService.getProductos(this.Productos);
  } 
  mostrarCamisetas(): void {
    
  }
  mostrarPantalones(): void {
    
  }
}
