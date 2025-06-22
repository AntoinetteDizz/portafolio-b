import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoController } from './proyecto.controller';
import { ProyectoService } from './proyecto.service';
import { Proyecto } from './entities/proyecto.entity';
import { TecnologiaModule } from '../tecnologia/tecnologia.module';
import { Tecnologia } from 'src/tecnologia/entities/tecnologia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Proyecto, Tecnologia]),
    TecnologiaModule,
  ],
  controllers: [ProyectoController],
  providers: [ProyectoService],
})
export class ProyectoModule {} 