// This consumes state from the reactify store

import { count } from "../stores/count";

export default function Consumer() {
  return <h2>{count()}</h2>;
}
