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
},
{
    username: "dr_sara",
    password: "doc12345",
    email: "sara.khan@hospital.com",
    role: "doctor",
    createdAt: new Date(),
},
{
    username: "dr_haider",
    password: "haider789",
    email: "haider@hospital.com",
    role: "doctor",
    createdAt: new Date(),
},
{
    username: "Ahmed",
    password: "ahmed123",
    email: "ahmed.patient@example.com",
    role: "patient",
    createdAt: new Date(),
},
{
    username: "Maryam",
    password: "maryam321",
    email: "maryam.patient@example.com",
    role: "patient",
    createdAt: new Date(),
},
{
    username: "Ali",
    password: "recp2024",
    email: "reception@hospital.com",
    role: "patiennt",
    createdAt: new Date(),
},
{
    username: "Junaid",
    password: "lab7788",
    email: "junaid.lab@hospital.com",
    role: "Patient",
    createdAt: new Date(),
},
{
    username: "Hina",
    password: "nurse998",
    email: "hina.nurse@hospital.com",
    role: "Doctor",
    createdAt: new Date(),
},
{
    username: "Munish",
    password: "support001",
    email: "it.support@hospital.com",
    role: "doctor",
    createdAt: new Date(),
}

    ]})
}
async function seed2() {
    const treatment = await prisma.treatment.createMany({
       data: [
        {
            id: "treat_1",
            userId: "user1", // faisal_develop
            name: "General Consultation",
            createdAt: new Date(),
        },
        {
            id: "treat_2",
            userId: "user2", // admin_master
            name: "Admin Account - No Treatment",
            createdAt: new Date(),
        },
        {
            id: "treat_3",
            userId: "user3", // dr_sara
            name: "Doctor Appointment Review",
            createdAt: new Date(),
        },
        {
            id: "treat_4",
            userId: "user4", // dr_haider
            name: "Follow-Up Assessment",
            createdAt: new Date(),
        },
        {
            id: "treat_5",
            userId: "user5", // patient_ahmed
            name: "Routine Checkup",
            createdAt: new Date(),
        },
        {
            id: "treat_6",
            userId: "user6", // patient_maryam
            name: "Blood Pressure Monitoring",
            createdAt: new Date(),
        },
        {
            id: "treat_7",
            userId: "user7", // reception_01
            name: "Reception Staff Medical Clearance",
            createdAt: new Date(),
        },
        {
            id: "treat_8",
            userId: "user8", // labtech_junaid
            name: "Lab Technician Health Screening",
            createdAt: new Date(),
        },
        {
            id: "treat_9",
            userId: "user9", // nurse_hina
            name: "Nursing Duty Fitness Test",
            createdAt: new Date(),
        },
        {
            id: "treat_10",
            userId: "user10", // support_it
            name: "IT Support Annual Physical Exam",
            createdAt: new Date(),
        }
    ]

    })
}


seed() .then(() => prisma.$disconnect);