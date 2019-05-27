
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: 'XXX.XXXX.XXX.XXX',
      port: 1433,
      username: 'XXX',
      password: 'XXX',
      domain: 'XXX',
      database: 'XXX',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
      options: {tdsVersion: '7_1',
        },
    }),
  },
];