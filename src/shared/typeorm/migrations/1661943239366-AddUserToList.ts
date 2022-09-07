import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddUserToList1661943239366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'mangas_list',
          new TableColumn({
            name: 'userL_id',
            type: 'uuid',
            isNullable: true,
          },
        ),
      );

      await queryRunner.createForeignKey(
        'mangas_list',
        new TableForeignKey({
          name: 'UserList',
          columnNames: ['userL_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onDelete:'CASCADE'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('mangas_list', 'UserList');
      await queryRunner.dropColumn('mangas_list', 'userL_id');
    }


}
