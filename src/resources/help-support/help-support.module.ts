import { Module } from '@nestjs/common';

import { HelpSupportController } from './help-support.controller';
import { HelpSupportService } from './help-support.service';

import { helpSupportsProvider } from './schema/help-support.provider';

import { DatabaseModule } from '../../system/config/database/database.module';
import { DhbNotificationService } from '../../system/push-notification/dashboard/dhb.service';
import { DhbNotificationProvider } from '../../system/push-notification/dashboard/schema/dhb.notification.provider';

// this is to make the applicatition work well -- cos it injects service classes that uses them
import { UsersService } from '../users/users.service';
import { UserProvider } from '../users/schema/user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [HelpSupportController],
    providers: [
        HelpSupportService,
        helpSupportsProvider,
        DhbNotificationService,
        DhbNotificationProvider,
        // this is to make the applicatition work well
        UsersService,
        UserProvider
    ]
})
export class HelpSupportModule {}
