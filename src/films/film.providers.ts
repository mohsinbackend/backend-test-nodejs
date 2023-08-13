import { DataSource } from 'typeorm';
import { Film } from './entities/film.entity';

export const filmProviders = [
  {
    provide: 'FILM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Film),
    inject: ['DATA_SOURCE'],
  },
];