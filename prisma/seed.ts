import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
         where: {
             email:"test@gmail.com"
         },
         update: {},
         create: {
            id:"60067",
            email:"test@gmail.com",
            phoneno:"55555 77777"
         },
    })
    console.log({user})
}
main()
    .then(()=>prisma.$disconnect())
    .catch(async(e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })


