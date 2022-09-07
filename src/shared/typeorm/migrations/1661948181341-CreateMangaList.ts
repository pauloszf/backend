import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddMangaToList1661948181341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name:'mangasCap_list',
        columns:[
          {
            name:'id',
            type:'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'public.uuid_generate_v4()',
          },
          {
            name: 'cap',
            type: 'decimal',
            precision: 10,
            scale: 1,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('mangasCap_list');
    }

}
