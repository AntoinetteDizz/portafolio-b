import { IsString, IsUrl, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateProyectoDto {
  @IsString()
  titulo: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  imagen?: string;

  @IsString()
  @IsUrl()
  urlRepo: string;

  @IsArray()
  @IsNumber({}, { each: true })
  tecnologiasIds: number[];
} 