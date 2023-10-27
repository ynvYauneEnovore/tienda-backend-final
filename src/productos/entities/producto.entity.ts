import { CategoriaProductoEntity } from 'src/categoria-productos/entities/categoria-producto.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from 'typeorm';

  
  @Entity('productos')
  export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'fk_categoria_producto_id'}) 
    idCategoriaProductos: number;

    @Column({name: 'codigo_producto', unique: true})
    codigoProducto: number;
  
    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 100 })
    descripcion: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;

    @Column({ length: 255, nullable: true})
    imagen: string | null;

    @Column({ name: 'stock'}) 
    stock: number;

    @Column({default: true})
    estado: boolean;
    
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @ManyToOne(() => CategoriaProductoEntity, (categoriaProducto) => categoriaProducto.productos)
    @JoinColumn({ name: 'fk_categoria_producto_id', referencedColumnName: 'id' })
    categoriaProducto: CategoriaProductoEntity;
      
  }