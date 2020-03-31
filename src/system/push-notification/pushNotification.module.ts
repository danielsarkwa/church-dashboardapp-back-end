import { Module } from '@nestjs/common';
import { DhbNotificationModule } from './dashboard/dhbNotification.module';

@Module({
    imports: [DhbNotificationModule],
    exports: [DhbNotificationModule]
})
export class PushNotificationModule { }