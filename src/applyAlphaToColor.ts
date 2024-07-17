export const applyAlphaToColor = (
  color: { r: number; g: number; b: number; a?: number },
  alphaValue: number,
): { r: number; g: number; b: number; a: number } => {
  return { ...color, a: alphaValue }
}
