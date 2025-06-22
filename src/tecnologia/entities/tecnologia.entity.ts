import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Proyecto } from '../../proyecto/entities/proyecto.entity';

@Entity('tecnologias')
export class Tecnologia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  imagen: string;

  @Column({ length: 100 })
  categoria: string;

  @ManyToMany(() => Proyecto, (proyecto) => proyecto.tecnologias)
  proyectos: Proyecto[];
} 