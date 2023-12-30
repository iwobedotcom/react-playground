/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery } from "react-query";

interface Superhero {
  id: number;
  name: string;
  alterEgo: string;
}

const querySuperHeroes = async () => {
  const response = await axios.get("http://localhost:4000/super-heroes");
  return response.data;
};

export function useSuperHeroesQuery() {
  return useQuery<Superhero[]>("super-heroes", querySuperHeroes, {
    select: (data) => {
      const heroNames = data.map((hero: any) => hero.name);
      return heroNames;
    },
  });
}
