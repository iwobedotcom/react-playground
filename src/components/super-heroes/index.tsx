/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSuperHeroesQuery } from "../../hooks/use-superheroes-query.hook";

function SuperHeroes() {
  const { data, isError, error, isLoading } = useSuperHeroesQuery();
  return (
    <main>
      <h1>Super Heroes</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{(error as Error)?.message || "An error occurred"}</h2>
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
