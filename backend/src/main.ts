import 'dotenv/config';

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  // CORS: برای توسعه و همچنین حالتی که refresh token در cookie باشد
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // Global validation: DTOها تمیز و امن‌تر می‌شوند
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Graceful shutdown for Prisma
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  await app.listen(port);

  logger.log(`Backend is listening on ${await app.getUrl()}`);
}

bootstrap();
