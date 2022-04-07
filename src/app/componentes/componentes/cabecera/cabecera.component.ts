import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../listado-productos/services/productos-service.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private servicio:ProductosServiceService) { }

  ngOnInit(): void {

  }

  verCamisetas() {
    this.servicio.mostrarCamisetas();


  }

  verPantalones() {
    this.servicio.mostrarCamisetas();
  }
}

