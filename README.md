# mangasList
Aprendendo Docker, TypeOrm e TypeScript

Para utilizar o app é necessário um data-source dentro do diretório shared/typeorm com o código a seguir:

      import 'reflect-metadata';

      import { DataSource } from 'typeorm';

      export const AppDataSource = new DataSource({

        type: 'postgres',

        host: 'localhost',

        port: 5432,

        username: 'username-da-database',

        password: 'senha-da-database',

        database: 'npme-da-database',

        synchronize: true,

        logging: false,

        entities: ['./src/modules/**/typeorm/entities/*ts'],

        migrations: ['./src/shared/typeorm/migrations/*.{ts,js}'],

        subscribers: [],

    });

Para iniciar a api depois de configurada:

    npm run dev
