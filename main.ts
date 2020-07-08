import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const data = await prisma.winery.create({
    data: {
      name: "Winery X",
      author: {
        connect: {
          email: "pantharshit00@gmail.com",
        },
      },
      tag: {
        create: [
          {
            tagName: {
              connectOrCreate: {
                where: {
                  name: "Tag 1",
                },
                create: {
                  name: "Tag 1",
                  author: {
                    connect: {
                      email: "pantharshit00@gmail.com",
                    },
                  },
                },
              },
            },
            author: {
              connect: {
                email: "pantharshit00@gmail.com",
              },
            },
          },
        ],
      },
    },
  });
  console.log(data);
}

main();
