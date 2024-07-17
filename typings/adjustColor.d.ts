import { AlphaValue } from "./types/alpha-value.type";
import { ThemeType } from "./types/theme.type";
export interface AdjustColorFunc {
    (colorValue: string, alphaValue: AlphaValue, mode: ThemeType, cssColorNames?: string[]): string;
}
export declare const log: (message: string) => void;
export declare const adjustColor: AdjustColorFunc;
