import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/componentes/cabecera/cabecera.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';

import {HttpClientModule} from '@angular/common/http';
import { DataServices } from './data.service';
import { ProductosServiceService } from './componentes/listado-productos/services/productos-service.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoProductosComponent,
    PiepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductosServiceService,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
