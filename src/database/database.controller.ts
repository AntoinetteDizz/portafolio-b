import { Controller, Get } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('database')
export class DatabaseController {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  @Get('status')
  async getDatabaseStatus() {
    try {
      await this.dataSource.query('SELECT 1');
      return { status: 'ok', message: 'Conexión exitosa a la base de datos' };
    } catch (error) {
      return {
        status: 'error',
        message: 'Error al conectar a la base de datos',
        error: error.message,
      };
    }
  }
} 