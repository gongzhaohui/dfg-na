import { Connection } from 'typeorm';
import { HourRate } from '../../entities/hourrate.entity';

export const HourRateProviders = [
  {
    provide: 'HourRateRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(HourRate),
    inject: ['DbConnectionToken'],
  },
];