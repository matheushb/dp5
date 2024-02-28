import axios from 'axios';
import * as fs from 'fs';
import { createPokemonPayload } from './utils/createPokemonPayload';

//PROMISE ALL
(async () => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  const rawPokemonList = [];

  for (const { url } of data.results) {
    rawPokemonList.push(axios.get(url));
  }

  const pokemonList = await Promise.all(rawPokemonList);

  const parsedPokemonList = pokemonList.map(pokemon =>
    createPokemonPayload(pokemon.data)
  );

  fs.writeFileSync('pokemon.json', JSON.stringify(parsedPokemonList, null, 2));
})();

//ASYNC AWAIT
(async () => {
  const { data } = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  const parsedPokemonList = [];

  for (const { url } of data.results) {
    const pokemon = await (await axios.get(url)).data;
    parsedPokemonList.push(createPokemonPayload(pokemon));
  }

  fs.writeFileSync('pokemon2.json', JSON.stringify(parsedPokemonList, null, 2));
})();
