import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Productos } from "./componentes/listado-productos/productos";
    
@Injectable()
export class DataServices {

   
    constructor(private httpCliente:HttpClient){}

    getProductos(Productos: Productos){
        this.httpCliente.put('https://estefashion-4012b-default-rtdb.firebaseio.com/datos.json', Productos).subscribe(
        
            response => console.log("Se han guardado los productos" + response),
            error=> console.log("Error: " + error),
        )
    }
}