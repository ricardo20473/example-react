import React, { useState, useEffect } from "react";
import axios from "axios";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

const AjaxApiComponent = () => {
  const [pokemons, setPokemos] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      let getPokemons = await axios.get(url);

      getPokemons.data.results.map(async (element) => {
        const resp = await axios.get(element.url);
        let pokemon = {
          id: resp.data.id,
          name: resp.data.name,
          avatar: resp.data.sprites.front_default,
        };

        setPokemos((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <div className="ajax">
      <h2>Peticiones Asincronas en Hooks</h2>

      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="row">
          {pokemons.map((el, index) => {
            return (
              <div className="col-2 ajax__img" key={index}>
                <Pokemon name={el.name} avatar={el.avatar} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AjaxApiComponent;
