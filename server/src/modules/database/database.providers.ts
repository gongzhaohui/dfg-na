import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'mssql',
        host: '10.151.80.151',
        port: 1433,
        username: 'dev',
        password: 'G19710406g',
        database: 'UFDATA_800_2017',
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: [/*'query',*/ 'error'],
        options: { tdsVersion: '7_1',"encrypt":false },
      }),
  },
];
