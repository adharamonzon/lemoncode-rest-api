import { Character } from './character.api-model';

//llamada a la api
/* export const getCharacter = async (id: number): Promise<Character> => {
  return (fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(resp => resp.json())
    .then(resp => resp)
  )
}; */

const characterUrl = 'http://localhost:3000/results';

//server json
export const getCharacter = async (id: number): Promise<Character> => {
  return (fetch(`${characterUrl}/${id}`)
    .then(resp => resp.json())
    .then(resp => resp)
  )
};

export const saveSentence = async (characterId: number, character: Character) => {
  await (fetch(`${characterUrl}/${characterId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(character),
  }));
};

export const updateSentence = async (characterId: number, character) => {
  await (fetch(`${characterUrl}/${characterId}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(character),
  }));
};
