import dotenv from "dotenv";
dotenv.config();

import { init as initDBCon } from "../models";
import { init as initWeb } from "./web";

initDBCon().then(initWeb);
