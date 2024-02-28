import { pokemonPayload } from '../types/types';

export function createPokemonPayload(pokemon: any): pokemonPayload {
  return {
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types,
    sprites: pokemon.sprites.front_default,
  };
}
