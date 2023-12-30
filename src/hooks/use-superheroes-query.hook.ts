/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQueries, useQuery, UseQueryResult } from "react-query";

export interface Superhero {
  id: number;
  name: string;
  alterEgo: string;
}

export interface Friends {
  id: number;
  name: string;
}

// ************************* Fetcher Functions

const querySuperHeroes = async () => {
  const response = await axios.get("http://localhost:4000/super-heroes");
  return response.data as Superhero[]; // Assert the type here
};

const querySuperHeroesById = async (id: number) => {
  const response = await axios.get(`http://localhost:4000/super-heroes/${id}`);
  return response.data as Superhero; // Assert the type here
};

const queryFriends = async () => {
  const response = await axios.get("http://localhost:4000/friends");
  return response.data as Friends[];
};

// ************************* UseQuery Declarations

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

export function useFriendsQuery(): UseQueryResult<Friends[], Error> {
  return useQuery<Friends[], Error>("friends", queryFriends);
}

// ************************* Parallel Query

export function useParallelQuery(): UseQueryResult[] {
  const queries = useQueries([
    {
      queryKey: "super-heroes",
      queryFn: querySuperHeroes,
    },
    {
      queryKey: "friends",
      queryFn: queryFriends,
    },
  ]);

  return queries;
}
