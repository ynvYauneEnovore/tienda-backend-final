export class CreateProductoDto {
    readonly idCategoriaProductos: number;
    readonly nombre: string;
    readonly descripcion: string;
    readonly precio: number;
    readonly stock: number;
    readonly codigoProducto: number;
    readonly estado: boolean;
}
