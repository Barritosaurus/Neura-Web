import { MigrationFn } from "umzug";
import { Sequelize } from "sequelize";

// Apply the migration //
export const up: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();

	// Make sure to include the transaction object in all queries via the "options" object //
	sequelize.transaction(async transaction => {
		// Add your migration code in here //
		// !!!! IMPORTANT !!!! //
		// Make sure to test **BOTH UP & DOWN MIGRATION** for this file after you're done. //
		// Before committing into Git, TEST WITH `just migrate up` AND `just migrate down`. //
		// Not testing both will result in a broken migration and will cause data integrity issues later. //

		throw "up migration not implemented. implement here";
	});
};

// Undo the migration //
export const down: MigrationFn<Sequelize> = async ({ context: sequelize }) => {
	const queryInterface = sequelize.getQueryInterface();

	// Make sure to include the transaction object in all queries via the "options" object //
	sequelize.transaction(async transaction => {
		// Add your migration code in here //
		// !!!! IMPORTANT !!!! //
		// Make sure to test **BOTH UP & DOWN MIGRATION** for this file after you're done. //
		// Before committing into Git, TEST WITH `just migrate up` AND `just migrate down`. //
		// Not testing both will result in a broken migration and will cause data integrity issues later. //

		throw "down migration not implemented. implement here.";
	});
};
