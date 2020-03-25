import { Module } from '@nestjs/common';
import { SermonsController } from './sermons.controller';
import { SermonsService } from './sermons.service';
import { sermonsProvider } from './schema/sermon.provider';
import { foldersProvider } from '../shared/schemas/folder.provider';
import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [SermonsController],
    providers: [
        SermonsService,
        sermonsProvider,
        foldersProvider
    ]
})
export class SermonsModule {}
