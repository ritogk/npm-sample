import { run as esmRun } from "@ritogk/module-esm";
import { run as commonjsRun } from "@ritogk/module-commonjs";

/**
 * commonjsとesmを実行するサンプル
 */
const main = () => {
  console.log("loader/main.ts");
  console.log(esmRun());
  console.log(commonjsRun());
};
main();
