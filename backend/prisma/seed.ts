import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function seed() {
    const user = await prisma.user.create({
        data: {
            username: "faisal04_develop",
            password:"faisal1234",
            email: "faisal04@develop.com",
            role: "doctor",
            createdAt: new Date(),
            updatedAt: new Date(),
        
        }
    })
}

seed() .then(() => prisma.$disconnect);