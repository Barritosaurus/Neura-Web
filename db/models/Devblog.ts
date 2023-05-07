import { Model, DataTypes } from "sequelize";
import dbCon from "../src/dbCon";

export interface DevblogAttributes {
	id: number;
    gameid: number;
	title: string;
	description: string;
	date: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DevblogCreationAttributes {}

export class Devblog
	extends Model<DevblogAttributes, DevblogCreationAttributes>
	implements DevblogAttributes
{
	declare id: number;
    declare gameid: number;
	declare title: string;
	declare description: string;
	declare date: string;
}

Devblog.init(
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
		tableName: "devblogs",
		sequelize: dbCon,
		timestamps: false,
	},
);
