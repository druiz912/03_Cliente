export class Productos {
  identificador: number;
  nombre: string;
  descripcion: string;
  pvp: number;
  sn: string;
  imagen: string;
  colorpredominante: string;
  stock: number;
  temporada: boolean;
  rebajado: boolean;
  id_categoria: number;
    id_tipo_cliente: number;

  constructor() {
    this.identificador = 0;
    this.nombre = '';
    this.descripcion = '';
    this.pvp = 0;
    this.sn = '';
    this.imagen = '';
    this.colorpredominante = '';
    this.stock = 0;
    this.temporada = false;
    this.rebajado = false;
    this.id_categoria = 0;
    this.id_tipo_cliente = 0;
  }

}
