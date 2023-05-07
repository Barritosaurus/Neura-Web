declare namespace NodeJS {
	export interface ProcessEnv {
		// Web server //
		PORT: string;

		// Database //
		DB_HOST: string;
		DB_NAME: string;
		DB_USER: string;
		DB_PASS: string;
		DB_SCHEMA: string;
	}
}
