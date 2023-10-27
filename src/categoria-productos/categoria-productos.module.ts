import { Module } from '@nestjs/common';
import { CategoriaProductosService } from './categoria-productos.service';
import { CategoriaProductosController } from './categoria-productos.controller';
import { CategoriaProductoEntity } from './entities/categoria-producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProductoEntity])],
  controllers: [CategoriaProductosController],
  providers: [CategoriaProductosService],
  exports: [CategoriaProductosService],

})
export class CategoriaProductosModule {}
