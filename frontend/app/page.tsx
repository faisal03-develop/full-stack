"use client";

import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {
const [jokes,setJokes] = useState([]);

useEffect(() => {
  axios.get("/jokes")
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
    </div>
  );
}
