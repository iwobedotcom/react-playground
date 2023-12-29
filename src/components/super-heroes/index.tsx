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

function SuperHeroes() {
  const { data, isLoading, isError, error } = useQuery<Superhero[]>(
    "super-heroes",
    querySuperHeroes,
    {
      select: (data) => {
        const heroNames = data.map((hero: Superhero) => hero.name);
        return heroNames;
      },
    }
  );

  return (
    <main>
      <h1>Super Heroes</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{error.message || "An error occurred."}</h2>
      ) : (
        <section>
          {data?.map((heroName: any) => (
            <p key={heroName}>{heroName}</p>
          ))}
        </section>
      )}
    </main>
  );
}

export default SuperHeroes;
