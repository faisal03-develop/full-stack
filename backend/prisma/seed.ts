import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

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

seed()