import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { UserProvider } from './schema/user.provider';

import { DatabaseModule } from '../../system/config/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        UsersService,
        UserProvider
    ]
})
export class UsersModule {}
