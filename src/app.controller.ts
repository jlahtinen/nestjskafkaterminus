import { Controller, Get } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import {
  HealthCheck,
  HealthCheckService,
  MicroserviceHealthIndicator,
} from '@nestjs/terminus';

@Controller()
export class AppController {
  constructor(
    private health: HealthCheckService,
    private microserviceHealthIndicator: MicroserviceHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return this.health.check([
      async () =>
        this.microserviceHealthIndicator.pingCheck('kafka', {
          timeout: 6000,
          transport: Transport.KAFKA,
          options: {
            client: {},
          },
        }),
    ]);
  }
}
