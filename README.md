# deno_x256

[![tag](https://img.shields.io/github/release/justjavac/deno_x256)](https://github.com/justjavac/deno_x256/releases)
[![Build Status](https://github.com/justjavac/deno_x256/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_x256/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_x256)](https://github.com/justjavac/deno_x256/blob/master/LICENSE)

Find the nearest [xterm 256 color](http://www.frexx.de/xterm-256-notes/) index for an rgb.

colors data source https://cdn.jsdelivr.net/gh/substack/node-x256@master/colors.json

## Usage

All xterm 256 colors:

```ts
import color from "https://deno.land/x/x256/color.ts";

console.log(color)
```

output:

```ts
[
  "000000",
  "800000",
  "008000",
  "808000",
  "000080",
  "800080",
  ...
  ...
```

Get the nearest xterm 256 color code for rgb inputs.:

```ts
import x256 from "https://deno.land/x/x256/mod.ts";

const c = x256(220,40,150);
console.log(c); // 162
```

Use raw ansi escape codes:

Check if the language code is valid:

```ts
import x256 from "https://deno.land/x/x256/mod.ts";

const c = x256(220,40,150);
console.log(`\x1b[38;5;${c}mBEEEEEP`);
```

### License

[deno_x256](https://github.com/justjavac/deno_x256) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
