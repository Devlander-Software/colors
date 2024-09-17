import { HexDecimalObject } from "../types/rgb.type";
export type ColorInputType = "hex" | "rgb" | "rgba" | "invalid";
export type ColorOutputType = "HexDecimalObject" | "Error" | "boolean";
export declare const colorTestResults: {
    passed: {
        hex: string[];
        rgb: never[];
    };
    failed: {
        rgb: string[];
        rgba: string[];
    };
};
export interface ColorTestCase {
    name: string;
    input: string;
    expected?: HexDecimalObject | boolean;
    expectedError?: string;
    typeInput: ColorInputType;
    typeOutput: ColorOutputType;
}
export declare const colorTestCases: ColorTestCase[];
