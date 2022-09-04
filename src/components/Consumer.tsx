// This consumes state from the reactify store

import { count, setCount } from "../stores/count";

export default function Consumer() {
  return (
    <>
      <h2>{count()}</h2>
      <button onclick={() => setCount((count) => count - 1)}>Decrease</button>
    </>
  );
}
