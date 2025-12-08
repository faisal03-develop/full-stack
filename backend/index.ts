import "dotenv/config";
import express from "express";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const app = express();
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString});
const prisma = new PrismaClient({adapter});
if (prisma) {
  console.log("Database is connected");
}
else{
  console.log("Database is not connected");
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=> {
  res.send('Hello World!');
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findUnique({
    where:{
      username:'faisal04'
    }
  });
  res.json(users);
}); 


app.put('/users/update',async (req,res)=>{
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

app.delete('/users/delete',async (req, res)=>{
  const deleteUser = await prisma.user.delete({
    where:{
      email:"faisal04@develop.com"
    },
  });
  res.json(deleteUser);
})


//Login Page:
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await prisma.user.findUnique({
    where: {
      email,
      password,
  }});
console.log(user);

  res.json("user");
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});