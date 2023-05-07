import { MigrationFn } from "umzug";
import { Sequelize, DataTypes } from "sequelize";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();
	sequelize.transaction(async transaction => {
		await queryInterface.createTable(
			"careers",
			{
				id: {
					primaryKey: true,
					type: DataTypes.BIGINT,
					allowNull: false,
					autoIncrement: true
				},
				title: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				description: {
					type: DataTypes.STRING,
					allowNull: false
				},
				details: {
					type: DataTypes.JSON,
					allowNull: false,
				},
				salary:	{
					type: DataTypes.STRING,
					allowNull: true
				},
			},
			{
				transaction,
			},
		);
		await queryInterface.createTable(
			"games",
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
				link: {
					type: DataTypes.STRING,
					allowNull: true
				},
				image: {
					type: DataTypes.STRING,
					allowNull: false,
				},
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
		await queryInterface.dropTable("careers", { transaction });
		await queryInterface.dropTable("games", { transaction });
	});
};
