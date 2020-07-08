## Introduction

Reproduction for https://github.com/prisma/prisma-client-js/issues/764


## Steps
1. Clone this repo and run `yarn install`. Insert your credentials in `prisma/.env` file
2. Run `npx prisma migrate save --experimental && npx prisma migrate up --experimental`
3. Run the follow sql in the database:
```sql
INSERT INTO "public"."User" ("email", "id", "name") VALUES
('pantharshit00@gmail.com', '944e1833-e225-4bf1-9e2b-db4ddccf379f', 'Harshit Pant');
```
4. Run `yarn start` to reproduce

