import { Module } from '@nestjs/common';

import { HelpSupportController } from './help-support.controller';
import { HelpSupportService } from './help-support.service';

import { helpSupportsProvider } from './schema/help-support.provider';
// import { foldersProvider } from '../shared/schemas/folder.provider';

import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [HelpSupportController],
    providers: [
        HelpSupportService,
        helpSupportsProvider,
        // foldersProvider
    ]
})
export class HelpSupportModule {}
