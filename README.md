# front-backend-sample

# Setup
### npm install
`npm install`
### Create SQLite Database
**SQLite Install is required!**
`sqlite3 database/database.sqlite3`
### Execute Migration Command before start
`npx typeorm-ts-node-commonjs migration:run -d ./src/data-source.ts`

## Memo
create migration file (migration file is already created)
`npx typeorm-ts-node-commonjs migration:create ./src/migration/UserMigration`
