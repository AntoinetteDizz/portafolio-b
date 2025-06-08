import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuración de CORS para desarrollo y producción
  const allowedOrigins = [
    'http://localhost:3001', // Desarrollo local
    'https://portafolio-f.onrender.com/' // Reemplaza con tu URL de frontend en Render
  ];

  app.use(cors({
    origin: function (origin, callback) {
      // Permitir requests sin origen (como mobile apps o curl requests)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Si necesitas enviar cookies o auth headers
  }));

  await app.listen(3000, '0.0.0.0'); // Escuchar en todas las interfaces de red
}
bootstrap();


/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({ origin: 'http://localhost:3001' })); // Permite peticiones desde el frontend
  await app.listen(3000);
}
bootstrap();*/

/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();*/