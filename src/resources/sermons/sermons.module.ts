import { Module } from '@nestjs/common';
import { SermonsController } from './sermons.controller';
import { SermonsService } from './sermons.service';
import { sermonsProvider } from './schema/sermon.provider';
import { foldersProvider } from '../shared/schemas/folder.provider';
import { DatabaseModule } from '../../system/config/database/database.module';
import { DhbNotificationService } from 'src/system/push-notification/dashboard/dhb.service';
import { DhbNotificationProvider } from 'src/system/push-notification/dashboard/schema/dhb.notification.provider';

// this is to make the applicatition work well -- cos it injects service classes that uses them
import { UsersService } from '../users/users.service';
import { UserProvider } from '../users/schema/user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [SermonsController],
    providers: [
        SermonsService,
        sermonsProvider,
        foldersProvider,
        DhbNotificationService,
        DhbNotificationProvider,
        // this is to make the applicatition work well
        UsersService,
        UserProvider
    ]
})
export class SermonsModule {}
