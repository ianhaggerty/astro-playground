import { count, setCount } from "../stores/count";

export default function Counter() {
  return (
    <>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>{count()}</button>
    </>
  );
}
