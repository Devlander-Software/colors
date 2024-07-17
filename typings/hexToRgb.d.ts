/**
 * Converts a hexadecimal color code to an RGB or RGBA color string.
 * @param hex - The hexadecimal color code to convert.
 * @returns The RGB or RGBA color string.
 *
 * @example
 * ```typescript
 * console.log(hexToRgb('#ff0000')); // 'rgb(255, 0, 0)'
 * console.log(hexToRgb('#ff000080')); // 'rgba(255, 0, 0, 0.5)'
 * ```
 */
export declare const hexToRgb: (hex: string) => string;
