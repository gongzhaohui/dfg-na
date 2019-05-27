
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection({
      type: 'mssql',
      host: '10.151.80.151',
      port: 1433,
      username: 'it08',
      password: 'G1971g',
      domain: 'dfg',
      database: 'UFDATA_800_2017',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
      options: {tdsVersion: '7_1',
        },
    }),
  },
];