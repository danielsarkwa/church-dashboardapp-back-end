import * as mongoose from 'mongoose';

import { Logger } from '@nestjs/common';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost:27017/love-reign-mobile-app', { useUnifiedTopology: true }, function(err) {
        if (err) {
          // log file to dev sys
          Logger.log('Database connection failed', 'DatabaseConnection');
        } else {
          Logger.log('Database connected successfully', 'DatabaseConnection'); 
        }
      }),
  },
];