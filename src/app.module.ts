import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ResourcesModule } from './resources/resources.module';

import { SystemModule } from './system/system.module';

@Module({
  imports: [ResourcesModule, SystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
