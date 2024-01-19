export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string
  };
}

export const createEmptyCharacter = (): Character => ({
  id: 1,
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  origin: {
    name: ''
  }
});
