"use client";
import React from "react";

function DisplayPokemon({ result }) {
  return (
    <div className="container mx-auto mt-5 px-4 py-8 text-center bg-slate-100 rounded-3xl">
      <div className="flex flex-col ">
        <h3 className="text-black font-bold text-xl capitalize">
          Name : {result?.name}
        </h3>
        <img src={result?.sprites?.front_default} alt="" srcSet="" />
        <h4 className="text-gray-700 font-bold">Caracteristicas</h4>
        {}
        <div className="flex justify-between p-4">
          <div className="text-gray-600 mt-3">
            <ul>
              <li>Hp</li>
              <li>Attack</li>
              <li>Defense</li>
              <li>Special-Attack</li>
              <li>Special-Defense</li>
              <li>Speed</li>
              <li>Type</li>
            </ul>
          </div>
          <div className="text-gray-600 mt-5 ">
            <ul>
              {result?.stats?.map((item, i) => {
                return <li key={i}>{item.base_stat}</li>;
              })}

              {result?.types?.map((t, i) => {
                return <li className="capitalize" key={i}>{t.type.name}</li>;
              })}

           
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayPokemon;
