export interface Character {
  location: any;
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: string
}

export const createEmptyCharacter = (): Character => ({
  id: 1,
  name: '',
  status: '',
  species: '',
  gender: '',
  image: '',
  origin: '',
  location: ''
});
