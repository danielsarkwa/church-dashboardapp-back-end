import { Module } from '@nestjs/common';
import { PushNotificationModule } from './push-notification/pushNotification.module';
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [
      PushNotificationModule
    ],
    controllers: [
      AuthController
    ]
})
export class SystemModule { }