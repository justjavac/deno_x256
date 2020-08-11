#!/usr/bin/env deno run --allow-net --allow-read --allow-write --allow-run --unstable

import { json2ts } from "https://deno.land/x/data/bin/json2ts.ts";

await json2ts({
  url: "https://cdn.jsdelivr.net/gh/substack/node-x256@master/colors.json",
  name: "colors",
});
