import { Model, DataTypes } from "sequelize";
import dbCon from "../src/dbCon";

export interface GameAttributes {
	id: number;
	name: string;
	link: string;
	image: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GameCreationAttributes {}

export class Game
	extends Model<GameAttributes, GameCreationAttributes>
	implements GameAttributes
{
	declare id: number;
	declare name: string;
	declare link: string;
	declare image: string;
}

Game.init(
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
			allowNull: true,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName: "games",
		sequelize: dbCon,
		timestamps: false,
	},
);
