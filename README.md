Nextjs + Prisma + postgreSQL 开箱即用

## 相关文档

- [Nextjs](https://nextjs.org/docs/getting-started/installation)
- [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql)
- [PostgreSQL](https://www.postgresql.org/docs/current/)
- [Tailwind](https://tailwindcss.com/docs/installation)

## 项目相关

- [Adminer](http://localhost:10433/?pgsql=db&username=myuser&db=myuser&ns=public&select=User)

## 常用命令

```shell
npx prisma db seed

npx prisma migrate dev --name "xx"

npx prisma migrate deploy
```

## 还没完成的

- docker deploy
- layout
- store