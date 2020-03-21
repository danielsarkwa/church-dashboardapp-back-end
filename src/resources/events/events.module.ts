import { Module } from '@nestjs/common';

import { EventsController } from './events.controller';
import { EventsService } from './events.service';

import { EventProvider } from './schema/event.provider';

import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [EventsController],
    providers: [
        EventsService,
        EventProvider
    ]
})
export class EventModule {}
