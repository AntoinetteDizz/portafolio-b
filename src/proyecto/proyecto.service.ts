import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { Tecnologia } from '../tecnologia/entities/tecnologia.entity';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
    @InjectRepository(Tecnologia)
    private readonly tecnologiaRepository: Repository<Tecnologia>,
  ) {}

  findAll() {
    return this.proyectoRepository.find({
      relations: ['tecnologias'],
    });
  }

  async create(createProyectoDto: CreateProyectoDto) {
    const { tecnologiasIds, ...proyectoData } = createProyectoDto;

    const tecnologias = await this.tecnologiaRepository.findBy({
      id: In(tecnologiasIds),
    });

    if (tecnologias.length !== tecnologiasIds.length) {
      throw new NotFoundException('Una o más tecnologías no fueron encontradas.');
    }

    const nuevoProyecto = this.proyectoRepository.create({
      ...proyectoData,
      tecnologias,
    });

    return this.proyectoRepository.save(nuevoProyecto);
  }
} 