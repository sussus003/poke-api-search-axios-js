"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import DisplayPokemon from "./DisplayPokemon";

function Search() {
  const [result, setResult] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [count, setCount] = useState(100);

  const fetchPokemon = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    setCount(count + 1);
    setResult(res.data);
    console.log(count);
    console.log(result);
  };

  console.log("Pokemon :", pokemon ? pokemon : "Nothing");

  return (
    <div className="container mx-auto my-10 flex justify-center">
      <div className="items-center">
        <input
          className="py-2 px-3 rounded-md border-2"
          type="text"
          name="search"
          id="search"
          placeholder="Search Pokemon"
          onChange={(e) => setPokemon(e.target.value)}
        />
        <input
          className="bg-slate-400 m-2 py-2 px-3 rounded-md"
          type="submit"
          value="Search"
          onClick={fetchPokemon}
        />
        
        {result ? (
          <DisplayPokemon result={result} />
        ) : (
          <h3 className="text-center mt-10 bg-slate-100 p-5 rounded-2xl">Nothing Here</h3>
        )}
      </div>
    </div>
  );
}

export default Search;
