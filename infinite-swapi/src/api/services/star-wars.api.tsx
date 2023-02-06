// const initialUrl =
//   "https://swapi.dev/api/people/";

// const fetchUrl = async (url) => {
//   const response = await fetch(url);
//   return response.json();
// };

// const initialUrl =
//   "https://swapi.dev/api/species/";

// const fetchUrl = async (url) => {
//   const response = await fetch(url);
//   return response.json();
// };

export type Person = {
  id: number;
  name: string;
  hairColor: string;
  eyeColor: string;
};

export type Species = {
  id: number;
  name: string;
  language: string;
  averageLifespan: number;
};

export type Page = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[] | Species[];
};
