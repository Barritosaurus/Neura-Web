"use strict";
import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { Model } from "sequelize";
import dbCon, { dbHost, getUmzug } from "../src/dbCon";

const basename = path.basename(__filename);

type ModelContainer = {
	[modelName: string]: Model;
};

const models: ModelContainer = {};

const init = async () => {
	console.log(`Connecting to DB (host: ${dbHost})`);
	await dbCon.authenticate();
	console.log("Authenticated");

	console.log("Running migrations...");
	await getUmzug(dbCon).up();
	console.log("Migrations complete");

	console.log(`Loading database models...`);
	// Dynamically load all models
	const modelLoadTasks: Promise<void>[] = [];
	fs.readdirSync(__dirname)
		.filter(file => {
			return (
				file.indexOf(".") !== 0 &&
				file !== basename &&
				file.slice(-3) === ".js" &&
				file.indexOf(".test.js") === -1
			);
		})
		.forEach(file => {
			modelLoadTasks.push(
				import(path.join(__dirname, file)).then(module => {
					const model = module as Model;
					models[module.name] = model;
				}),
			);
		});
	await Promise.all(modelLoadTasks);

	Object.keys(models).forEach(modelName => {
		const model: Model & {
			associate?: () => void;
		} = models[modelName];

		if (model.associate) {
			model.associate();
		}
	});
	console.log(`Database models loaded`);
};

export { init, models };
