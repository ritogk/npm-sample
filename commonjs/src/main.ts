import { subA } from "./sub-a";
import { subB } from "./sub-b";
import * as lodash from "lodash";

export const run = () => {
  console.log("★ main");
  console.log(subA());
  console.log(subB());
  console.log(lodash.chunk(["a", "b", "c", "d"], 2));
};
