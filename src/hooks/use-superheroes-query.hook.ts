/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";

export interface Superhero {
  id: number;
  name: string;
  alterEgo: string;
}

const querySuperHeroes = async () => {
  const response = await axios.get("http://localhost:4000/super-heroes");
  return response.data as Superhero[]; // Assert the type here
};

const querySuperHeroesById = async (id: number) => {
  const response = await axios.get(`http://localhost:4000/super-heroes/${id}`);
  return response.data as Superhero; // Assert the type here
};

export function useSuperHeroesQuery(): UseQueryResult<Superhero[], Error> {
  return useQuery<Superhero[], Error>("super-heroes", querySuperHeroes);
}

export function useSuperHeroesQueryId(
  id: number
): UseQueryResult<Superhero, Error> {
  return useQuery<Superhero, Error>(["super-hero", id], () =>
    querySuperHeroesById(id)
  );
}
