import { Module } from '@nestjs/common';
import { DhbNotificationController } from './dhb.controller';
import { DhbNotificationService } from './dhb.service';
import { DhbNotificationProvider } from './schema/dhb.notification.provider';
import { DatabaseModule } from '../../config/database/database.module';
import { UsersService } from 'src/resources/users/users.service';
import { UserProvider } from 'src/resources/users/schema/user.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [DhbNotificationController],
    providers: [
        DhbNotificationService,
        DhbNotificationProvider,
        UsersService,
        UserProvider
    ]
})
export class DhbNotificationModule {}