import { Injectable } from '@nestjs/common';
import { CreateCategoriaProductoDto } from './dto/create-categoria-producto.dto';
import { UpdateCategoriaProductoDto } from './dto/update-categoria-producto.dto';
import { CategoriaProductoEntity } from './entities/categoria-producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class CategoriaProductosService {
  constructor(
    @InjectRepository(CategoriaProductoEntity)
    private repository: Repository<CategoriaProductoEntity>,
  ){}

  async create(createCategoriaProductoDto: CreateCategoriaProductoDto): Promise<CategoriaProductoEntity> {
    return this.repository.save({
      nombre: createCategoriaProductoDto.nombre.trim(),
      estado: createCategoriaProductoDto.estado,
      descripcion: createCategoriaProductoDto.descripcion.trim()

    });
  }

  async findAll(): Promise<CategoriaProductoEntity[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaProducto`;
  }

  update(id: number, updateCategoriaProductoDto: UpdateCategoriaProductoDto) {
    return `This action updates a #${id} categoriaProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaProducto`;
  }
}
