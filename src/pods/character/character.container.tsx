import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  let isUpdate = false;

  const handleLoadCharacter = async () => {
    isUpdate = true;
    const characterId = parseInt(id);
    api.getCharacter(characterId)
      .then((results) => mapCharacterFromApiToVm(results))
      .then((results) => {
        setCharacter(results)
      })
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, [props]);

  const handleSave = async (characterSentence: string, id?: number) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    if (id) {
      character.bestSentences[id] = (characterSentence)
    } else {
      character.bestSentences.push(characterSentence);
    }
    await api.saveSentence(apiCharacter.id, character);    
  };

  const handelEdit = async (id: number, newSentence: string) => {
    console.log('id', id);
    let element = '';
    for (let i = 0; i < character.bestSentences.length; i++) {
      element = character.bestSentences[id];
      console.log('element', element);
      character.bestSentences[id] = newSentence;
      element = newSentence;
    }
    await api.updateSentence(character.id, character,);
  }

  return <CharacterComponent character={character} saveSentence={handleSave} editSentence={handelEdit} />;
};
