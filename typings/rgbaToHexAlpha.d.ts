/**
 * Converts an RGBA or RGB string to a hexadecimal color value with optional alpha channel.
 * @param rgba - The RGBA or RGB string to convert.
 * @param forceRemoveAlpha - Whether to remove the alpha channel from the resulting hexadecimal color value. Default is false.
 * @returns The hexadecimal color value.
 * @throws Error if the input RGBA/RGB string is invalid.
 *
 * @example
 * ```typescript
 * console.log(RGBAToHexAlpha('rgba(255, 0, 0, 1)')); // Output: '#ff0000ff'
 * console.log(RGBAToHexAlpha('rgb(255, 0, 0)'));     // Output: '#ff0000'
 * console.log(RGBAToHexAlpha('rgba(255, 0, 0, 0.5)'));// Output: '#ff000080'
 * console.log(RGBAToHexAlpha('rgba(255, 0, 0, 0.5)', true)); // Output: '#ff0000'
 * ```
 */
export declare const RGBAToHexAlpha: (rgba: string, forceRemoveAlpha?: boolean) => string;
