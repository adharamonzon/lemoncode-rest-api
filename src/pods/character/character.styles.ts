import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const infoContainer = css`
  display: flex;
`;

export const list = css`
  list-style: none;
`;

export const listInfo = css`
  display: flex;
`;

export const ItemTitle = css`
  font-weight: bold;
  margin-right: 10px;
`;

export const bestSentences = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 500px;
`;
export const addSentenceContainer = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const input = css`
  height: 40px;
  border: none;
  border-bottom: solid 1px black;
  margin: 30px 0;
  width: 500px;
`;

export const btnContainer = css `
  width: 250px;
  display: flex;
  justify-content: space-between;
`

export const btn = css`
  width: 100px;
  height: 40px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;