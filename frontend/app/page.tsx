"use client";

import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
const [jokes,setJokes] = useState([]);

useEffect(() => {
  axios.get("http://localhost:5000/api/jokes")
  .then((response) => {
      setJokes(response.data);
    }
    ).catch((error) => {
      console.log(error);
    }
    );
  })

  return (
    <div>
      <h1>Home</h1>
      <p>Jokes: {jokes.length}</p>

      {
      jokes.map((joke ,index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}
