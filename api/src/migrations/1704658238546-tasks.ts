import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTaskTable1704658238546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'task',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'enum',
                    enum: ['pending', 'finished'],
                    default: "'pending'",
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
            ],
        }), true);

        await queryRunner.createForeignKey('task', new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('task');

        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('user_id') !== -1);
            if (foreignKey) {
                await queryRunner.dropForeignKey('task', foreignKey);
            }

            await queryRunner.dropTable('task');
        }
    }
}
