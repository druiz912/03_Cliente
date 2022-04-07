import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from './services/productos-service.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  listadoProductos: any[] = [];

  constructor(private servicio: ProductosServiceService) { }

  ngOnInit(): void {
    this.servicio.getProductos().subscribe(
      productos => {
        console.log("Obteniendo productos");
        console.log(productos);
        this.listadoProductos= productos;
      })
  }
}
