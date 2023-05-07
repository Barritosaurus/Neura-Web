import express, { Request, Response } from "express";
import { body, param } from "express-validator";
import { Career } from "../../../models/Career";
import dumpRequestErrors from "../dumpRequestErrors";

const router = express.Router();

router.put(
	"/create",
	[
		body("title").exists(),
		body("description").exists(),
		body("details").exists(),
		dumpRequestErrors,
	],

	async (req: Request, res: Response) => {
		const id = req.body.id as unknown as number;
		const title = req.body.title as unknown as string;
		const description = req.body.description as unknown as string;
		const details = req.body.details as unknown as string;
		const salary = req.body.salary as unknown as string;
		

		const [instance, created] = await Career.findOrCreate({
			where: {
				id,
			},
			defaults: {
				id,
				title,
				description,
				details,
				salary
			},
		});

		if (!created) {

			await instance.save({ fields: ["title", "description", "details", "salary"] });
			await instance.reload();
		}

		res.json(instance.get());
	},
);

router.get(
	"/:id",
	[param("id").isNumeric(), dumpRequestErrors],
	async (req: Request, res: Response) => {
		const id = req.params.id as unknown as number;

		const search: Partial<Career> = {
			id,
		};

		res.json(
			await Career.findAll({
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
			await Career.findAll(),
		);
	}
)

router.delete(
	"/:id",
	[param("id").isNumeric(), dumpRequestErrors],
	async (req: Request, res: Response) => {
		const id = req.params.id as unknown as number;
		const search: Partial<Career> = {
			id,
		};

		const deletedCount = await Career.destroy({
			where: search,
		});

		if (deletedCount === 0) {
			return res.status(400).json({ errors: [{ msg: "No career found to delete" }] });
		}

		return res.status(200).json({ success: true });
	},
);

export default router;
