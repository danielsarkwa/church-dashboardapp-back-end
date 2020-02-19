import { Module } from '@nestjs/common';

import { ConfigController } from './config/config.controller';

import { AuthController } from './auth/auth.controller';

import { PushNotificationController } from './push-notification/push-notification.controller';

import { UploadController } from './upload/upload.controller';

@Module({
    imports: [],
    controllers: [
      AuthController, 
      PushNotificationController, 
      UploadController,
      ConfigController
    ],
    providers: []
})
export class SystemModule { }