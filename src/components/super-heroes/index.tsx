/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
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
          {data?.map((hero) => (
            <Link
              key={hero.id}
              to={`/super-heroes/${hero.id}`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {hero.name}
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

export default SuperHeroes;
