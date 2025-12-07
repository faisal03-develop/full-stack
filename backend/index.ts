import "dotenv/config";
import express from "express";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const app = express();
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString});
const prisma = new PrismaClient({adapter});

app.get('/users',(req,res)=> {
  res.send('Hello World!');
})

app.get('/', async (req, res) => {
  const users = await prisma.user.findUnique({
    where:{
      id:2
    }
  });
  res.json(users);
}); 


app.put('/users',async (req,res)=>{
  const updateUser = await prisma.user.update({
    where:{
      email:"faisal04@develop.com"
    },
    data:{
      role:"patient"
    },
  });
  res.json(updateUser);
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});