import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { PushNotificationController } from './push-notification/push-notification.controller';

@Module({
    controllers: [
      AuthController, 
      PushNotificationController
    ]
})
export class SystemModule { }