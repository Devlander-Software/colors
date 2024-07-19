import { HexDecimalObject } from "./types/hex-decimal-object.interface";
export declare class Color {
    private color;
    constructor(color: string | HexDecimalObject);
    darken(factor: number): Color;
    lighten(factor: number): Color;
    rgb(): string;
    hex(): string;
    invert(): string;
    alpha(factor: number): HexDecimalObject;
    blend(factor: number, secondaryColor: HexDecimalObject): Color;
    getColor(): HexDecimalObject;
}
