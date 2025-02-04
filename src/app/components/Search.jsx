"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import DisplayPokemon from "./DisplayPokemon";

function Search() {
  const [result, setResult] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [count, setCount] = useState(100);
  const [error, setError] = useState(true);

  const fetchPokemon = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      setCount(count + 1);
      setResult(res.data);
      console.log(count);
      console.log(result);
      setError(false);
    } catch {
      setError(true);
    }
  };

  console.log("Pokemon :", pokemon ? pokemon : "Nothing");

  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      fetchPokemon();
    }
  };

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
          onKeyDown={(e) => onKeyDown(e)}
        />
        <input
          className="bg-slate-400 m-2 py-2 px-3 rounded-md hover:cursor-pointer"
          type="submit"
          value="Search"
          onClick={fetchPokemon}
        />

        {error ? (
          <h3 className="text-center mt-10 bg-slate-100 p-5 rounded-2xl">
            Nothing Here! Please try again.
          </h3>
        ) : (
          <DisplayPokemon result={result} />
        )}
      </div>
    </div>
  );
}

export default Search;
