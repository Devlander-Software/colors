import { darkenColor } from "../darkenColor";

describe("darkenColor", () => {
  test("darkens the RGB color by the given factor", () => {
    expect(darkenColor({ r: 255, g: 100, b: 100 }, 0.1)).toEqual({
      r: 230,
      g: 90,
      b: 90,
    });
    expect(darkenColor({ r: 100, g: 255, b: 100 }, 0.2)).toEqual({
      r: 80,
      g: 204,
      b: 80,
    });
    expect(darkenColor({ r: 100, g: 100, b: 255 }, 0.3)).toEqual({
      r: 70,
      g: 70,
      b: 179,
    });
  });

  test("does not reduce RGB values below 0", () => {
    expect(darkenColor({ r: 20, g: 20, b: 20 }, 0.5)).toEqual({
      r: 10,
      g: 10,
      b: 10,
    });
    expect(darkenColor({ r: 50, g: 100, b: 200 }, 1)).toEqual({
      r: 0,
      g: 0,
      b: 0,
    });
  });

  test("handles edge cases for darkening factor", () => {
    expect(darkenColor({ r: 255, g: 255, b: 255 }, 0)).toEqual({
      r: 255,
      g: 255,
      b: 255,
    });
    expect(darkenColor({ r: 128, g: 128, b: 128 }, 0.5)).toEqual({
      r: 64,
      g: 64,
      b: 64,
    });
    expect(darkenColor({ r: 64, g: 64, b: 64 }, 0.25)).toEqual({
      r: 48,
      g: 48,
      b: 48,
    });
  });
});
