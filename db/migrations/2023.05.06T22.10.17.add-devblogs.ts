import { MigrationFn } from "umzug";
import { Sequelize, DataTypes } from "sequelize";

export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();
	sequelize.transaction(async transaction => {
		await queryInterface.createTable(
			"devblogs",
			{
				id: {
					primaryKey: true,
					type: DataTypes.BIGINT,
					allowNull: false,
					autoIncrement: true
				},
				gameid: {
					type: DataTypes.BIGINT,
					allowNull: false,
				},
				title: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				description: {
					type: DataTypes.STRING,
					allowNull: false
				},
				date: {
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
		await queryInterface.dropTable("devblogs", { transaction });
	});
};
