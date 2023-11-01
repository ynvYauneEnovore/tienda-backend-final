import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaProductosService } from './categoria-productos.service';
import { CreateCategoriaProductoDto } from './dto/create-categoria-producto.dto';
import { UpdateCategoriaProductoDto } from './dto/update-categoria-producto.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';


@ApiTags('CATEGORÍA PRODUCTO  ')

@Controller('CatProducto')
export class CategoriaProductosController {
  constructor(private readonly categoriaProductosService: CategoriaProductosService) {}

  @Post()
  create(@Body() createCategoriaProductoDto: CreateCategoriaProductoDto) {
    return this.categoriaProductosService.create(createCategoriaProductoDto);
  }

  @Get()
  findAll() {
    return this.categoriaProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaProductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaProductoDto: UpdateCategoriaProductoDto) {
    return this.categoriaProductosService.update(+id, updateCategoriaProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaProductosService.remove(+id);
  }
}
