export const isValidRgba = (rgba: string): boolean => {
    try {
      const rgbaRegex = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      const match = rgba.match(rgbaRegex);
      if (!match) return false;
      const [, r, g, b, a] = match.map(Number);
      return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255 && (!a || (a >= 0 && a <= 1));
    } catch (error) {
      console.error(`Error validating RGBA string: ${error}`);
      return false;
    }
  };
  