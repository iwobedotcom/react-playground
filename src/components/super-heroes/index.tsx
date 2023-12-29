/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery } from "react-query";

interface Superhero {
  id: number;
  name: string;
  alterEgo: string;
}

function SuperHeroes() {
  const { isLoading, data, error, isError } = useQuery<Superhero[]>(
    "super-heroes",
    async () => {
      const response = await axios.get("http://localhost:4000/super-heroes");
      return response.data;
    }
  );
  console.log(
    "🚀 ~ file: index.tsx:10 ~ const{isLoading,data}=useQuery ~ data:",
    data
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
