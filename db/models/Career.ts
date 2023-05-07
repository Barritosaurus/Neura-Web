import { Model, DataTypes } from "sequelize";
import dbCon from "../src/dbCon";

export interface CareerAttributes {
	id: number;
	title: string;
	description: string;
	details: JSON;
	salary: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CareerCreationAttributes {}

export class Career
	extends Model<CareerAttributes, CareerCreationAttributes>
	implements CareerAttributes
{
	declare id: number;
	declare title: string;
	declare description: string;
	declare details: JSON;
	declare salary: string;
}

Career.init(
	{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			allowNull: false,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		details: {
			type: DataTypes.JSON,
			allowNull: true,
		},
		salary:	{
			type: DataTypes.STRING,
			allowNull: true
		},
	},
	{
		tableName: "careers",
		sequelize: dbCon,
		timestamps: false,
	},
);
