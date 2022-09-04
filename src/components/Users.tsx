import { useQuery, Provider } from "urql";
import { client } from "../db/setup";

const UsersQuery = `
  query {
    users {
      id
      fname
    }
  }
`;

function Users() {
  const [result] = useQuery({
    query: UsersQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;

  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      {JSON.stringify(data)}
    </div>
  );
}

export default () => (
  <Provider value={client}>
    <Users />
  </Provider>
);
