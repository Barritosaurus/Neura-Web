import express, { Request, Response } from "express";
import { body, param } from "express-validator";
import { Game } from "../../../models/Game";
import dumpRequestErrors from "../dumpRequestErrors";

const router = express.Router();

router.put(
	"/create",
	[
		body("name").exists(),
		body("link").exists(),
		body("image").exists(),
		dumpRequestErrors,
	],

	async (req: Request, res: Response) => {
		const id = req.body.id as unknown as number;
		const name = req.body.name as unknown as string;
		const link = req.body.link as unknown as string;
		const image = req.body.image as unknown as string;

		const [instance, created] = await Game.findOrCreate({
			where: {
				id,
			},
			defaults: {
				id,
				name,
				link,
				image
			},
		});

		if (!created) {

			await instance.save({ fields: ["name", "link", "image"] });
			await instance.reload();
		}

		res.json(instance.get());
	},
);

router.get(
	"/:id",
	[param("id").isString(), dumpRequestErrors],
	async (req: Request, res: Response) => {
		const id = req.params.id as unknown as number;

		const search: Partial<Game> = {
			id,
		};

		res.json(
			await Game.findAll({
				where: search,
			}),
		);
	},
);

router.get(
	"/getall",
	[dumpRequestErrors],
	async (_: Request, res: Response) => {
		res.json(
			await Game.findAll(),
		);
	}
)

router.delete(
	"/:id",
	[param("id").isString(), dumpRequestErrors],
	async (req: Request, res: Response) => {
		const id = req.params.id as unknown as number;
		const search: Partial<Game> = {
			id,
		};

		const deletedCount = await Game.destroy({
			where: search,
		});

		if (deletedCount === 0) {
			return res.status(400).json({ errors: [{ msg: "No game found to delete" }] });
		}

		return res.status(200).json({ success: true });
	},
);

export default router;
