import { MigrationFn } from "umzug";
import { Sequelize, DataTypes } from "sequelize";

// Apply the migration //
export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();

	// Make sure to include the transaction object in all queries via the "options" object //
	sequelize.transaction(async transaction => {
		await queryInterface.addColumn(
			"employees",
			"position",
			{
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: "",
			},
			{ transaction },
		);
	});
};

// Undo the migration //
export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();

	// Make sure to include the transaction object in all queries via the "options" object //
	sequelize.transaction(async transaction => {
		await queryInterface.removeColumn(
			"employees",
			"position",
			{ transaction },
		);
	});
};
