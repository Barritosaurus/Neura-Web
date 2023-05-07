import express, { Request, Response } from "express";
import { body, param } from "express-validator";
import { Employee } from "../../../models/Employee";
import dumpRequestErrors from "../dumpRequestErrors";

const router = express.Router();

router.put(
	"/create",
	[
		body("name").exists(),
		body("position").exists(),
		body("image").exists(),
		dumpRequestErrors,
	],

	async (req: Request, res: Response) => {
		const id = req.body.id as unknown as number;
		const name = req.body.name as unknown as string;
		const position = req.body.position as unknown as string;
		const links = req.body.links as unknown;
		const image = req.body.image as unknown as string;

		const [instance, created] = await Employee.findOrCreate({
			where: {
				id,
			},
			defaults: {
				id,
				name,
				position,
				links,
				image
			},
		});

		if (!created) {

			await instance.save({ fields: ["name", "position", "links", "image"] });
			await instance.reload();
		}

		res.json(instance.get());
	},
);


router.get(
	"/getall",
	[dumpRequestErrors],
	async (_: Request, res: Response) => {
		res.json(
			await Employee.findAll(),
		);
	}
)

router.delete(
	"/:id",
	[param("id").isString(), dumpRequestErrors],
	async (req: Request, res: Response) => {
		const id = req.params.id as unknown as number;
		const search: Partial<Employee> = {
			id,
		};

		const deletedCount = await Employee.destroy({
			where: search,
		});

		if (deletedCount === 0) {
			return res.status(400).json({ errors: [{ msg: "No employee found to delete" }] });
		}

		return res.status(200).json({ success: true });
	},
);

export default router;
