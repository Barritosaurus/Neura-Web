dev-db:
	@echo 'Starting development server for DB...'
	npm run dev --prefix db

dev-db-setup:
	@echo 'Setting up development DB...'
	npm run setup-db --prefix db

lint-backend +files="":
	npx eslint --max-warnings=0 --cache --fix db

format-backend +files="":
	npx prettier --write db

migrate *args:
	cd db && npm run migrate -- {{args}}

create-migration name:
	cd db && node migration-files create --name {{name}}

sequelize *args:
	cd db && sequelize {{args}}
