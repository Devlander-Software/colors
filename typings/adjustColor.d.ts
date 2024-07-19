import { ThemeType } from "./types/theme.type";
import { AlphaScale } from "./types/alpha-scale.type";
export interface AdjustColorFunc {
    (colorValue: string, alphaValue: AlphaScale, mode: ThemeType, cssColorNames?: string[]): string;
}
export declare const log: (message: string) => void;
export declare const adjustColor: AdjustColorFunc;
