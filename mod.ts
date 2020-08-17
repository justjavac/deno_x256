import colors from "./colors.ts";

export type RGB = [number, number, number];

export default function x256(r: number, g: number, b: number): number {
  const c: RGB = isRGB(r) ? r : [r, g, b];
  let best = {
    index: -1,
    distance: (255 ** 2) * 3 + 1,
  };

  for (let i = 0; i < colors.length; i++) {
    const d = distanceSquare(hex2rgb(colors[i]), c);
    if (d <= best.distance) {
      best = { distance: d, index: i };
    }
  }

  return best.index;
}

export function distanceSquare(a: RGB, b: RGB): number {
  return Math.pow(a[0] - b[0], 2) +
    Math.pow(a[1] - b[1], 2) +
    Math.pow(a[2] - b[2], 2);
}

export function isRGB(x: unknown): x is RGB {
  return Array.isArray(x);
}

export function hex2rgb(hex: string): RGB {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return [r, g, b];
}
