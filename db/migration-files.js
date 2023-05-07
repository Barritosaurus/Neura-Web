// This file is only used for handling the migration files themselves. It is not used in the application. //

require("ts-node/register");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const conExports = require("./src/dbCon");
conExports.getUmzug(conExports.default).runAsCLI();
