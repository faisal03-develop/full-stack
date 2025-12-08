import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function seed() {
    const user = await prisma.patient.create({
        data:{
            name:"faisal",
            password:"123456",
            username:"faisal04",
            email:"faisal04@develop.com",

        }
})}

seed() .then(() => prisma.$disconnect);