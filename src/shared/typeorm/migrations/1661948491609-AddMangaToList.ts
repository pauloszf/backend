import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddMangaToList1661948491609 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'mangasCap_list',
          new TableColumn({
            name: 'mangaList_id',
            type: 'uuid',
            isNullable: true,
          },
        ),
      );

      await queryRunner.createForeignKey(
        'mangasCap_list',
        new TableForeignKey({
          name: 'MangasListManga',
          columnNames: ['mangaList_id'],
          referencedTableName: 'mangas_list',
          referencedColumnNames: ['id'],
          onDelete:'CASCADE'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('mangasCap_list', 'UserUserList');
      await queryRunner.dropColumn('mangasCap_list', 'mangaList_id');
    }

}
