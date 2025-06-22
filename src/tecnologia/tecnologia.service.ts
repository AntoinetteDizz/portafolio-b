import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tecnologia } from './entities/tecnologia.entity';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';

@Injectable()
export class TecnologiaService {
  constructor(
    @InjectRepository(Tecnologia)
    private readonly tecnologiaRepository: Repository<Tecnologia>,
  ) {}

  findAll() {
    return this.tecnologiaRepository
      .createQueryBuilder('tecnologia')
      .getMany();
  }

  create(createTecnologiaDto: CreateTecnologiaDto) {
    const nuevaTecnologia = this.tecnologiaRepository.create(createTecnologiaDto);
    return this.tecnologiaRepository.save(nuevaTecnologia);
  }
} 