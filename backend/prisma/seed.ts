import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function seed() {
    const user = await prisma.user.create({
        data: {
            username: "faisal_develop",
            password:"faisal123",
            email: "faisal@develop.com",
            role: "patient",
            createdAt: new Date(),
            updatedAt: new Date(),
        
        }
    })
}

seed() .then(() => prisma.$disconnect);