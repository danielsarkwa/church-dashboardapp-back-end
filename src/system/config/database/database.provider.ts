import * as mongoose from 'mongoose';

import { Logger } from '@nestjs/common';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/love-reign-mobile-app', function() {
        Logger.log('Database connected successfully', 'DatabaseConnection');
      }),
  },
];