import { DataTypes, Sequelize } from "sequelize";
import { MigrationFn } from "umzug";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();
	sequelize.transaction(async transaction => {
		await queryInterface.createTable(
			"employees",
			{
				id: {
					primaryKey: true,
					type: DataTypes.BIGINT,
					allowNull: false,
					autoIncrement: true
				},
				name: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				links: {
					type: DataTypes.JSON,
					allowNull: true,
				},
				image: {
					type: DataTypes.STRING,
					allowNull: false
				}
			},
			{
				transaction,
			},
		);
	});
};

export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();

	sequelize.transaction(async transaction => {
		await queryInterface.dropTable("employees", { transaction });
	});
};
