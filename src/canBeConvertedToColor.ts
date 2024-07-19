import { isValidHex } from "./isValidHex";
import { isValidRgb } from "./isValidRgb";
import { isValidRgba } from "./isValidRgba";

export const canBeConvertedIntoColor = (
  colorValue: string,
  cssColorNames = ["transparent"],
): boolean => {
  if (cssColorNames.includes(colorValue)) return true;
  return (
    isValidHex(colorValue) || isValidRgb(colorValue) || isValidRgba(colorValue)
  );
};
