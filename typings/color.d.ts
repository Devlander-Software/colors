import { HexDecimalObject } from "./types/hex-decimal-object.interface";
import { AlphaScale } from "./types/alpha-scale.type";
import { ThemeType } from "./types/theme.type";
export declare class Color {
    private color;
    private mode;
    constructor(color: string | HexDecimalObject, mode?: ThemeType);
    darken(factor: AlphaScale): Color;
    lighten(factor: AlphaScale): Color;
    rgb(): string;
    hex(): string;
    invert(): string;
    alpha(factor: AlphaScale): HexDecimalObject;
    blend(factor: AlphaScale, secondaryColor: HexDecimalObject): Color;
    getColor(): HexDecimalObject;
}
