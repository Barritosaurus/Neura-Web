import express from "express";
import cors from "cors";
import employeeRouter from "./employees";
import careerRouter from "./careers";
import gameRouter from "./games";

const PORT = process.env.PORT;

export const init = (): Promise<void> => {
	const app = express();

	app.use(cors());

	app.use(
		express.json({
			limit: "4mb",
		}),
	);

	// AWS API OMITTED FOR SECURITY REASONS

	app.use("/employees", employeeRouter);
	app.use("/careers", careerRouter);
	app.use("/games", gameRouter);


	app.all("/", (req, res) => {
		res.status(404).end();
	});

	return new Promise(resolve => {
		app.listen(PORT, () => {
			console.log(`Server listening on ${PORT}`);
			resolve();
		});
	});
};
