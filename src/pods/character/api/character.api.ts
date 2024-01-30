import { Character } from './character.api-model';

export const getCharacter = async (id: number): Promise<Character> => {
  return (fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(resp => resp.json())
    .then(resp => resp)
  )
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
