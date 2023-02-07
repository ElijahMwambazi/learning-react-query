import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export type Person = {
  name: string;
  mass: string;
  height: string;
  hair_color: string;
  eye_color: string;
  skin_color: string;
  created: string;
};
export type Species = {
  name: string;
  language: string;
  averageLifespan: number;
};

export type PeoplePage = {
  count: number;
  next: string | null;
  results: Person[];
};
export type SpeciesPage = {
  count: number;
  next: string | null;
  results: Species[];
};

export type PeopleQueryData = {
  data: PeoplePage;
};
export type SpeciesQueryData = {
  data: SpeciesPage;
};

const enum APIUrl {
  INITIAL_PEOPLE_URL = "https://swapi.dev/api/people/",
  INITIAL_SPECIES_URL = "https://swapi.dev/api/species/",
}

const fetchPages = async (url: string) =>
  await axios.get<PeopleQueryData, any>(url);

export const useInfiniteFetchPeople = () => {
  return useInfiniteQuery<PeopleQueryData>(
    ["star-war-people"],
    ({ pageParam = APIUrl.INITIAL_PEOPLE_URL }) =>
      fetchPages(pageParam),
    {
      getNextPageParam: (lastPage) =>
        lastPage.data.next || null,
    }
  );
};
