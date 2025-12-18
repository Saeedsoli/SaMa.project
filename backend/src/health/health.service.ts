import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}

  getStatus() {
    return this.check();
  }

  private async check() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;

      return { status: 'ok', db: 'ok' };
    } catch (error) {
      throw new ServiceUnavailableException('Database connection failed');
    }
  }
}

