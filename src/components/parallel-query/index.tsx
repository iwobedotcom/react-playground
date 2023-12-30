import {
  useParallelQuery,
  Superhero,
  Friends,
} from "../../hooks/use-superheroes-query.hook";

function ParallelQuery() {
  const [superheroesQuery, friendsQuery] = useParallelQuery();

  if (superheroesQuery.isLoading || friendsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (superheroesQuery.isError || friendsQuery.isError) {
    return (
      <div>
        Error fetching data:{" "}
        {(superheroesQuery.error as Error)?.message ?? "Unknown error"} ||
        {(friendsQuery.error as Error)?.message ?? "Unknown error"}
      </div>
    );
  }

  const superheroes: Superhero[] = (superheroesQuery.data as Superhero[]) || [];
  const friends: Friends[] = (friendsQuery.data as Friends[]) || [];

  return (
    <div>
      <h1>Superheroes</h1>
      <ul>
        {superheroes.map((hero) => (
          <li key={hero.id}>{hero.name}</li>
        ))}
      </ul>

      <h1>Friends</h1>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>{friend.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ParallelQuery;
