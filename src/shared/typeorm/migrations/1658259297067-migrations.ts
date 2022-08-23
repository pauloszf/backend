import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class migrations1658259297067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name:'mangas',
        columns:[
          {
            name:'id',
            type:'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'public.uuid_generate_v4()',
          },
          {
            name:'mangaName',
            type:'varchar',
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
      await queryRunner.dropTable('mangas');
    }

}
