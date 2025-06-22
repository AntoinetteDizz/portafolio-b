import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Tecnologia } from '../../tecnologia/entities/tecnologia.entity';

@Entity('proyectos')
export class Proyecto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  imagen: string;

  @Column({ length: 255, name: 'url_repo' })
  urlRepo: string;

  @ManyToMany(() => Tecnologia, (tecnologia) => tecnologia.proyectos)
  @JoinTable({
    name: 'tecnologia_proyecto',
    joinColumn: {
      name: 'id_proyecto',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_tecnologia',
      referencedColumnName: 'id',
    },
  })
  tecnologias: Tecnologia[];
} 