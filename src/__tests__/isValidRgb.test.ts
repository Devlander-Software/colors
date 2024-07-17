export const isValidRgb = (rgb: string): boolean => {
  const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
  const match = rgb.match(rgbRegex);
  if (!match) return false;
  const [, r, g, b] = match.map(Number);
  return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
};
