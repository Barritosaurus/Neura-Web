import express, { Request, Response } from "express";
import { body, param } from "express-validator";
import { Devblog } from "../../../models/Devblog";
import dumpRequestErrors from "../dumpRequestErrors";

const router = express.Router();

router.put(
	"/create",
	[
		body("gameid").exists().toInt(),
		body("title").exists(),
		body("description").exists(),
		body("date").exists(),
		dumpRequestErrors,
	],

	async (req: Request, res: Response) => {
		const gameid = req.body.gameid as unknown as number;
		const title = req.body.title as unknown as string;
		const description = req.body.description as unknown as string;
		const date = req.body.date as unknown as string;
		

		const [instance, created] = await Devblog.findOrCreate({
			where: {
				gameid,
			},
			defaults: {
				gameid,
				title,
				description,
				date,
			},
		});

		if (!created) {

			await instance.save({ fields: ["title", "description", "date"] });
			await instance.reload();
		}

		res.json(instance.get());
	},
);

router.get(
	"/:gameid",
	[param("gameid").exists().toInt(), dumpRequestErrors],
	async (req: Request, res: Response) => {
		const id = req.params.id as unknown as number;

		const search: Partial<Devblog> = {
			id,
		};

		res.json(
			await Devblog.findAll({
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
			await Devblog.findAll(),
		);
	}
)

router.delete(
	"/:gameid",
	[param("id").exists().toInt(), dumpRequestErrors],
	async (req: Request, res: Response) => {
		const id = req.params.id as unknown as number;
		const search: Partial<Devblog> = {
			id,
		};

		const deletedCount = await Devblog.destroy({
			where: search,
		});

		if (deletedCount === 0) {
			return res.status(400).json({ errors: [{ msg: "No devblog found to delete" }] });
		}

		return res.status(200).json({ success: true });
	},
);

export default router;
