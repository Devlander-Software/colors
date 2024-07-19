import { blendColors } from "../blendColors";

describe("blendColors", () => {
  test("blends two colors based on the given alpha scale", () => {
    expect(
      blendColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }, 0.5),
    ).toEqual({ r: 128, g: 0, b: 128 });
    expect(
      blendColors({ r: 0, g: 255, b: 0 }, { r: 255, g: 0, b: 0 }, 0.75),
    ).toEqual({ r: 64, g: 191, b: 0 });
    expect(
      blendColors({ r: 0, g: 0, b: 255 }, { r: 255, g: 255, b: 0 }, 0.25),
    ).toEqual({ r: 191, g: 191, b: 64 });
  });

  test("handles alpha scale of 0 and 1", () => {
    expect(
      blendColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }, 0),
    ).toEqual({ r: 0, g: 0, b: 255 });
    expect(
      blendColors({ r: 255, g: 0, b: 0 }, { r: 0, g: 0, b: 255 }, 1),
    ).toEqual({ r: 255, g: 0, b: 0 });
  });

  test("handles edge cases for alpha scale", () => {
    expect(
      blendColors({ r: 128, g: 128, b: 128 }, { r: 0, g: 0, b: 0 }, 0.5),
    ).toEqual({ r: 64, g: 64, b: 64 });
    expect(
      blendColors({ r: 128, g: 128, b: 128 }, { r: 255, g: 255, b: 255 }, 0.5),
    ).toEqual({ r: 192, g: 192, b: 192 });
  });
});
