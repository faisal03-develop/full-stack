import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from '@prisma/adapter-pg';
import "dotenv/config";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function seed() {
    const user = await prisma.user.createMany({
        data:[ 
{
    username: "admin_master",
    password: "admin123",
    email: "admin@hospital.com",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "dr_sara",
    password: "doc12345",
    email: "sara.khan@hospital.com",
    role: "doctor",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "dr_haider",
    password: "haider789",
    email: "haider@hospital.com",
    role: "doctor",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "Ahmed",
    password: "ahmed123",
    email: "ahmed.patient@example.com",
    role: "patient",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "Maryam",
    password: "maryam321",
    email: "maryam.patient@example.com",
    role: "patient",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "Ali",
    password: "recp2024",
    email: "reception@hospital.com",
    role: "patiennt",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "Junaid",
    password: "lab7788",
    email: "junaid.lab@hospital.com",
    role: "Patient",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "Hina",
    password: "nurse998",
    email: "hina.nurse@hospital.com",
    role: "Doctor",
    createdAt: new Date(),
    updatedAt: new Date(),
},
{
    username: "Munish",
    password: "support001",
    email: "it.support@hospital.com",
    role: "doctor",
    createdAt: new Date(),
    updatedAt: new Date(),
}

    ]})
}


seed() .then(() => prisma.$disconnect);