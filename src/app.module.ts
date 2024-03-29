import { Module } from '@nestjs/common';

import { ResourcesModule } from './resources/resources.module';

import { SystemModule } from './system/system.module';

@Module({
  imports: [ResourcesModule, SystemModule],
})
export class AppModule {}
