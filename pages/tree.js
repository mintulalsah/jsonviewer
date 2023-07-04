import { JSONTree } from "react-json-tree";
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from "immutable";

export default function tree() {
  // Inside a React component:
  const json = {
    array: [1, 2, 3],
    bool: true,
    object: {
      foo: "bar",
    },
    immutable: Map({ key: "value" }),
  };
  return <JSONTree data={json} />;
}
