import { assertEquals } from "https://deno.land/std@0.68.0/testing/asserts.ts";

import x265 from "./mod.ts";

Deno.test("test x265 function", (): void => {
  assertEquals(x265(220, 40, 150), 162);
});
