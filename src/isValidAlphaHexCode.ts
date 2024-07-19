/**
 * Checks if a hex code is a valid alpha hex code.
 * @param hexCode - The hex code to validate.
 * @returns {boolean} - True if the hex code is valid, false otherwise.
 */
export function isValidAlphaHexCode(hexCode: string): boolean {
  // Regular expression to match a valid alpha hex code
  const alphaHexPattern = /^#([A-Fa-f0-9]{8})$/;
  return alphaHexPattern.test(hexCode);
}
