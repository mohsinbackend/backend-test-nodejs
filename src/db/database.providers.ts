import { DataSource } from 'typeorm';
import { runSeeders } from 'typeorm-extension';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'backend_test_nodejs',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });
      
      //return dataSource.initialize();

      const initialized = await dataSource.initialize();

      await runSeeders(dataSource, {
        seeds: ['src/db/seeds/*{.ts,.js}'],
        factories: ['src/db/factories/*{.ts,.js}']
      });
      return initialized;

      
      //return dataSource.initialize();
    
    },
  },
];