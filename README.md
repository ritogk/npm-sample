# commonjs と esm の npm サンプル

## バージョンアップ

```
cd commonjs
npm run version:up
cd ../
cd esm
npm run version:up
cd ../
cd loader
npm update
```

## 自分用メモ

commonjs から直接 esm を実行できず esm からは commonjs を呼び出せるので、新規で作るパッケージは esm モジュールとして作れば良さそう。
有名な oss も esm の移行の流れあり。

パッケージの簡易実行には ts-node ではなく esbuild を使うのが良さそう。
ts-node をで typescript スタイルのコードを手軽に実行する事ができるが esm の import パスに関する問題があり実行できない。

この問題は tsc で esm 形式にトランスパイルした時におき、トランスパイル時に from 先に js 拡張子が付与されるず node から実行する事ができない、

```tsx
// トランスコンパイル元のコード
import { sample } from "sample-module";
// トランスパイル後のコード
import { sample } from "sample-module";
// nodeからesmを実行するにはjs拡張子が必要。
import { sample } from "sample-module.js";
```

tsc で js 拡張子が付与されない理由は typescript チームいわく ecmascript の仕様に拡張子を指定しろと定義されていないからで、ランタイム側(node.js)側で正しく解釈するべきとの事。

node.js 側は治すような気配はないがなく放置されている。

tsconfig.json とか package.json とか別ライブラリを使えば動くようにできるような記載があったがうまくいかなかった。

ランタイムを deno 等に変えるのが手っ取り早いと思うが、色々詰め込まれすぎている感がありトラブった時にめんどくさそうなので deno は一旦使わずに、esbuild でバンドリング後に実行することにする。

esbuild なら簡易設定で esm を実行する事ができ、commonjs と esm が混ざった状態のスクリプトも簡単に実行する事ができる。また、ブラウザ, node どちらでも動くようなコードが簡単に作成できる。
