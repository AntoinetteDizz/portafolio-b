import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller() // Sin prefijo para la raíz
export class AppController {
  // Ruta raíz con HTML
  @Get()
  getRoot(@Res() res: Response) {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>API NestJS</title>
        <style>
          body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f8f9fa;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            color: #28a745;
          }
          p {
            color: #555;
          }
        </style>
      </head>
      <body>
        <h1>🚀 API corriendo correctamente</h1>
        <p>El backend NestJS está activo y funcionando.</p>
      </body>
      </html>
    `);
  }

  // Ruta JSON normal
  @Get('api/saludo')
  getSaludo(): { message: string } {
    return { message: 'Hola desde el backend!' };
  }
}



/*@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}*/
