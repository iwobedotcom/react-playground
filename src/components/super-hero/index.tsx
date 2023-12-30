import { useParams } from "react-router-dom";
import { useSuperHeroesQueryId } from "../../hooks/use-superheroes-query.hook";

function SuperHero() {
  const { id } = useParams();
  const { data } = useSuperHeroesQueryId(Number(id));
  console.log("🚀 ~ file: index.tsx:7 ~ SuperHero ~ data:", data);

  return (
    <main>
      <h2>{data?.name}</h2>
      <h3>{data?.alterEgo}</h3>
    </main>
  );
}

export default SuperHero;
