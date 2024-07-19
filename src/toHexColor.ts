export const toHexColor = (color: {
  r: number;
  g: number;
  b: number;
}): string => {
  const toHexComponent = (comp: number) => comp.toString(16).padStart(2, "0");
  return `#${toHexComponent(color.r)}${toHexComponent(color.g)}${toHexComponent(color.b)}`.toUpperCase();
};
