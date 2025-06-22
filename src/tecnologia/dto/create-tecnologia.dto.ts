import { IsString, IsUrl, IsOptional } from 'class-validator';

export class CreateTecnologiaDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  imagen?: string;

  @IsString()
  categoria: string;
} 