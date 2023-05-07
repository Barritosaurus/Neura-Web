import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import { SequelizeStorage, Umzug } from "umzug";

const envConfig = {
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
};

const dbHost = envConfig.host;
const dbName = envConfig.database;
const dbUser = envConfig.username;
const dbPass = envConfig.password;
const dbDialect = "postgres";
if (dbHost === undefined) throw "Unknown database host";
if (dbName === undefined) throw "Unknown database name";
if (dbUser === undefined) throw "Unknown database user";
if (dbPass === undefined) throw "Unknown database password";
if (dbDialect === undefined) throw "Unknown database dialect";

const con = new Sequelize(dbName, dbUser, dbPass, {
	host: dbHost,
	dialect: dbDialect,
	logging: true,
});

export const getUmzug = (dbCon: Sequelize) => {
	return new Umzug({
		migrations: {
			glob: [
				"../migrations/*.*",
				{
					cwd: __dirname,
					ignore: "**/*.js.map",
				},
			],
		},
		context: dbCon,
		storage: new SequelizeStorage({
			sequelize: dbCon,
			modelName: "SequelizeMeta",
			columnName: "name",
		}),
		logger: console,
		create: {
			folder: "migrations",
			template: filePath => [
				[filePath, fs.readFileSync(path.join(__dirname, "../template/migration.ts")).toString()],
			],
		},
	});
};

export { dbHost };
export default con;
