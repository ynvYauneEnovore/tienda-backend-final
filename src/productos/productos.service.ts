import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoEntity } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(ProductoEntity)
    private repository: Repository<ProductoEntity>,
  ){}
  async create(createProductoDto: CreateProductoDto):  Promise<ProductoEntity> {
    return this.repository.save({
      idCategoriaProductos: createProductoDto.idCategoriaProductos,
      nombre: createProductoDto.nombre.trim(),
      descripcion: createProductoDto.descripcion.trim(),
      precio: createProductoDto.precio,
      stock: createProductoDto.stock,
      estado: createProductoDto.estado,
      codigoProducto: createProductoDto.codigoProducto,
    });
  }

  async findAll(): Promise<ProductoEntity[]> {
    return this.repository.find({ relations: { categoriaProducto: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
