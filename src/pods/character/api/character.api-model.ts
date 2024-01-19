export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  image: string,
  location: {
    name: string,
    url: string
  },
  origin: {
    name: string,
    url: string
  },
  episodes: string[],
  url: string,
  created: Date
}