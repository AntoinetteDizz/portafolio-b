import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TecnologiaController } from '../tecnologia/tecnologia.controller';
import { TecnologiaService } from './tecnologia.service';
import { Tecnologia } from './entities/tecnologia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tecnologia])],
  controllers: [TecnologiaController],
  providers: [TecnologiaService],
})
export class TecnologiaModule {} 