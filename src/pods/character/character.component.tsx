import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
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
  );
};
