import React from 'react';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { input } from '../../common/components/form/text-field/text-field.styles';

interface Props {
  character: Character;
  saveSentence: (sentence: string, id?: number) => void;
  editSentence: (id: number, newSentence: string) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, saveSentence, editSentence } = props;
  const [sentence, setSentence] = React.useState<string>('');
  const [newSentence, setNewSentence] = React.useState<string>('');

  const handelChange = () => {
    saveSentence(sentence);
    setSentence('');
  }

  const handelEdit = (id: number) => {
    console.log('component', id);
    editSentence(id, newSentence)
  }

  return (
    <div>
      <main className={classes.main}>
      <h2>{character.name}</h2>
      <div className={classes.infoContainer}>
        <div>
          <img src={character.image} alt="character" />
        </div>
        <ul className={classes.list}>
          <li>
            <div className={classes.listInfo}>
              <p  className={classes.ItemTitle}>Status: </p>
              <p>{character.status}</p>
            </div>
          </li>
          <li>
            <div className={classes.listInfo}>
              <p className={classes.ItemTitle}>Species: </p>
              <p>{character.species}</p>
            </div>
          </li>
          <li>
            <div className={classes.listInfo}>
              <p className={classes.ItemTitle}>Gender: </p>
              <p> {character.gender}</p>
            </div>
          </li>
          <li>
            <div className={classes.listInfo}>
              <p className={classes.ItemTitle}>Name: </p>
              <p>{character.location.name}</p>
            </div>
          </li>
          <li>
            <div className={classes.listInfo}>
              <p className={classes.ItemTitle}>Origin: </p>
              <p>{character.origin}</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <h4>Best Sentences:</h4>
    <form className={classes.bestSentences}>
      <ul className={classes.addSentenceContainer}>
        {character.bestSentences.length > 0 ? 
          character.bestSentences.map((sentence: string, id: number) => {
            return (
              <li key={id}>
                <p>{sentence}</p>
                <input className={classes.input} placeholder=' Update sentence' type='text' onChange={(e) => setNewSentence(e.currentTarget.value)}/>
                <div  className={classes.btnContainer}>
                  <button className={classes.btn} onClick={() => handelEdit(id)}>Edit</button>
                  <button className={classes.btn}>Delete</button>
                </div>
              </li>)
            })
            
          : (<li></li>)
        }
      <li>
        <input className={classes.input} type="text" value={sentence} onChange={(e) => setSentence(e.currentTarget.value)} placeholder='Write your best sentence here' />
        <button className={classes.btn} onClick={handelChange}>Save</button>
      </li>    
      </ul>
    </form>
    </div>
  );
};
