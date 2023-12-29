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
  const onSuccess = (data: Superhero[]) => {
    console.log("🚀 ~ file: index.tsx:18 ~ onSuccess ~ data:", data);
  };

  const onError = (error: any) => {
    console.log("🚀 ~ file: index.tsx:22 ~ onError ~ error:", error);
  };

  const { data, isLoading, isError, error } = useQuery<Superhero[]>(
    "super-heroes",
    querySuperHeroes,
    { onSuccess, onError }
  );

  return (
    <main>
      <h1>Super Heroes</h1>

      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{error.message}</h2>
      ) : (
        <section>
          {data?.map((hero) => (
            <p key={hero.id}>{hero.name}</p>
          ))}
        </section>
      )}
    </main>
  );
}

export default SuperHeroes;
