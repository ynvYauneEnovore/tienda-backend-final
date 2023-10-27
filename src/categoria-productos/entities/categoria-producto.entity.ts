
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductoEntity } from 'src/productos/entities/producto.entity';

@Entity('categorias_producto')
export class CategoriaProductoEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({default: true})
  estado: boolean;

  @Column({ length: 100 })
  descripcion: string;

  @OneToMany(() => ProductoEntity, (producto) => producto.categoriaProducto)
  productos: ProductoEntity[];
}
