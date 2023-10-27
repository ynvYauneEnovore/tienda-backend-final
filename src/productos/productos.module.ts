import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { ProductoEntity } from './entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
