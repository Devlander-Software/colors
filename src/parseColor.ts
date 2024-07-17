import { canBeConvertedIntoColor } from "./canBeConvertedToColor";
import { hexesToDecimals } from "./hexToDecimals";
import { hexToRgb } from "./hexToRgb";
import { hexToRgba } from "./hexToRgba";
import { isValidHex } from "./isValidHex";
import { isValidRgb } from "./isValidRgb";
import { isValidRgba } from "./isValidRgba";
import { parseRgbString } from "./parseRgbString";
import { toRgbString } from "./toRgbString";
import { HexDecimalObject } from "./types/hex-decimal-object.interface";

export const parseColor = (colorValue: string): HexDecimalObject => {
    if (!canBeConvertedIntoColor(colorValue)) {
        throw new Error("Invalid color format");
    }

    try {
        let rgbString: string | null = null;
        let rgbaString: string | null = null;
        let result;
        if (isValidHex(colorValue)) {
            rgbString = hexToRgb(colorValue);
            rgbaString = hexToRgba(colorValue);
        } else if (isValidRgb(colorValue)) {
            rgbString = colorValue;
        } else if (isValidRgba(colorValue)) {
            rgbaString = colorValue;
        }

        if (rgbString && rgbString !== null) {
            result = parseRgbString(rgbString);
        }

        if (rgbaString && rgbaString !== null && result === null) {
            result = parseRgbString(rgbaString);
        }


        if(result){
            return result
        } else {
            result = {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            }
        }
        return result
    } catch (error) {
        console.error(`Error parsing color value: ${colorValue}`, error);
        throw error;
    }
}
