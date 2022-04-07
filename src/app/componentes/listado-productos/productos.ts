export class Productos {
  //Si elimino los ! me sale error, no sé porque

  identificador!: number;
  nombre!: string;
  descripcion!: string;
  pvp!: number;
  sn!: string;
  imagen!: string;
  colorpredominante!: string;
  stock!: number;
  temporada!: boolean;
  rebajado!: boolean;
  id_categoria!: number;
    id_tipo_cliente!: number;

}
