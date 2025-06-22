import { Controller, Get, Post, Body } from '@nestjs/common';
import { TecnologiaService } from './tecnologia.service';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly tecnologiaService: TecnologiaService) {}

  @Post()
  create(@Body() createTecnologiaDto: CreateTecnologiaDto) {
    return this.tecnologiaService.create(createTecnologiaDto);
  }

  @Get()
  findAll() {
    return this.tecnologiaService.findAll();
  }
} 