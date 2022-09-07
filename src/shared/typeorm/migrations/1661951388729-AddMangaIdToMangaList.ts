import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddMangaIdToMangaList1661951388729 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'mangasCap_list',
          new TableColumn({
            name: 'manga_id',
            type: 'uuid',
            isNullable: true,
          },
        ),
      );

      await queryRunner.createForeignKey(
        'mangasCap_list',
        new TableForeignKey({
          name: 'MangaMangasList',
          columnNames: ['manga_id'],
          referencedTableName: 'mangas',
          referencedColumnNames: ['id'],
          onDelete:'CASCADE'
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('mangasCap_list', 'MangaMangasList');
      await queryRunner.dropColumn('mangasCap_list', 'manga_id');
    }

}
