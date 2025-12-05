import express from 'express';
import cors from 'cors';



app.use(cors());
const PORT = process.env.PORT;
const app = express();

const jokes = [
    {
        id:1,
        title:'title 1',
        content:'content 1',
    },
    {
        id:2,
        title:'title 2',
        content:'content 2',
    },
]



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/jokes', (req, res) => {
    res.json(jokes);
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});