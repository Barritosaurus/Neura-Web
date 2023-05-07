import { Model, DataTypes } from "sequelize";
import dbCon from "../src/dbCon";

export interface EmployeeAttributes {
	id: number;
	name: string;
	position: string;
	links: JSON;
	image: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EmployeeCreationAttributes {}

export class Employee
	extends Model<EmployeeAttributes, EmployeeCreationAttributes>
	implements EmployeeAttributes
{
	declare id: number;
	declare name: string;
	declare position: string;
	declare links: JSON;
	declare image: string;
}

Employee.init(
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
		position: {
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
		tableName: "employees",
		sequelize: dbCon,
		timestamps: false,
	},
);
