import { HexDecimalObject } from "../types/rgb.type";

export type ColorInputType = "hex" | "rgb" | "rgba" | "invalid";
export type ColorOutputType = "HexDecimalObject" | "Error" | "boolean";

export interface ColorTestCase {
  name: string;
  input: string;
  expected?: HexDecimalObject | boolean;
  expectedError?: string;
  typeInput: ColorInputType;
  typeOutput: ColorOutputType;
}

// Unique hex colors test cases
const uniqueHexColors = [
  "#B20A28",
  "#009655",
  "#D5EDD5",
  "#008149",
  "#361849",
  "#51246D",
  "#1B88BF",
  "#fff",
  "#65676B",
  "#222220",
  "#4A4A4A",
  "#828282",
  "#F4F5E6",
  "#ED6322",
  "#0063AD",
  "#000",
  "#4BB543",
  "#E07116",
  "#fcfcfc",
  "#1E1E1E",
  "#E1E1E1",
  "#0C0C0C",
];

// Valid RGB strings test cases
const validRgbStrings = [
  "rgb(255, 0, 128)",
  "rgb(0, 128, 255)",
  "rgb(100, 100, 100)",
  "rgb(0,0,0)",
  "rgb(255, 255, 255)",
];

// Valid RGBA strings test cases
const validRgbaStrings = [
  "rgba(255, 0, 128, 0.5)",
  "rgba(0, 128, 255, 0.5)",
  "rgba(100, 100, 100, 0.5)",
  "rgba(0,0,0,0.5)",
  "rgba(255, 255, 255, 0.5)",
];

// Generate RGB test cases
const generateRgbTestCases = (): ColorTestCase[] => {
  const cases: ColorTestCase[] = [
    {
      name: "handles edge case with no spaces",
      input: "rgb(0,0,0)",
      expected: true,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles edge case with maximum values",
      input: "rgb(255, 255, 255)",
      expected: true,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles out of range value - case 1",
      input: "rgb(256, 255, 255)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles out of range value - case 2",
      input: "rgb(255, 256, 255)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles out of range value - case 3",
      input: "rgb(255, 255, 256)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles negative value",
      input: "rgb(-1, 0, 128)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles missing closing parenthesis",
      input: "rgb(255, 0, 128",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles wrong format",
      input: "rgba(255, 0, 128)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles missing component",
      input: "rgb(255, 0)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles extra alpha component",
      input: "rgb(255, 0, 128, 0.5)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles trailing comma",
      input: "rgb(255, 0, 128,)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles empty string",
      input: "",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles missing parentheses and numbers",
      input: "rgb",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles empty parentheses",
      input: "rgb()",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles non-numeric component",
      input: "rgb(255, 0, 128, extra)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles newline between components",
      input: "rgb(255, 0, 128,\n)",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
    {
      name: "handles extra characters after valid format",
      input: "rgb(255, 0, 128) extra",
      expected: false,
      typeInput: "rgb",
      typeOutput: "boolean",
    },
  ];

  return [
    ...validRgbStrings.map((color) => ({
      name: `validates correctly formatted RGB string ${color}`,
      input: color,
      expected: true,
      typeInput: "rgb" as ColorInputType,
      typeOutput: "boolean" as ColorOutputType,
    })),
    ...cases,
  ];
};

// Generate RGBA test cases
const generateRgbaTestCases = (): ColorTestCase[] => {
  return validRgbaStrings.map((color) => ({
    name: `validates correctly formatted RGBA string ${color}`,
    input: color,
    expected: true,
    typeInput: "rgba" as ColorInputType,
    typeOutput: "boolean" as ColorOutputType,
  }));
};

export const colorTestCases: ColorTestCase[] = [
  {
    name: "should return parsed RGB object for valid hex color",
    input: "#ff0000",
    expected: { r: 255, g: 0, b: 0 },
    typeInput: "hex",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGBA object for valid hex color with alpha",
    input: "#ff000080",
    expected: { r: 255, g: 0, b: 0, a: 0.5 },
    typeInput: "hex",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "handles case when alpha value is 100%",
    input: "#ffffffff",
    expected: { r: 255, g: 255, b: 255, a: 1.0 },
    typeInput: "hex",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGB object for valid rgb color",
    input: "rgb(255, 0, 0)",
    expected: { r: 255, g: 0, b: 0 },
    typeInput: "rgb",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGBA object for valid rgba color",
    input: "rgba(255, 0, 0, 0.5)",
    expected: { r: 255, g: 0, b: 0, a: 0.5 },
    typeInput: "rgba",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should throw error for invalid color format",
    input: "invalid-color",
    expectedError: "Invalid color format",
    typeInput: "invalid",
    typeOutput: "Error",
  },
  {
    name: "should return parsed RGB object for valid RGB string with spaces",
    input: "rgb( 255 , 0 , 0 )",
    expected: { r: 255, g: 0, b: 0 },
    typeInput: "rgb",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGB object for valid RGB string with percentages",
    input: "rgb(100%, 0%, 0%)",
    expected: { r: 255, g: 0, b: 0 },
    typeInput: "rgb",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGBA object for valid RGBA string with spaces",
    input: "rgba( 255 , 0 , 0 , 0.5 )",
    expected: { r: 255, g: 0, b: 0, a: 0.5 },
    typeInput: "rgba",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGBA object for valid RGBA string with percentages",
    input: "rgba(100%, 0%, 0%, 0.5)",
    expected: { r: 255, g: 0, b: 0, a: 0.5 },
    typeInput: "rgba",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGB object for valid RGB string without spaces",
    input: "rgb(255,0,0)",
    expected: { r: 255, g: 0, b: 0 },
    typeInput: "rgb",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should return parsed RGBA object for valid RGBA string without spaces",
    input: "rgba(255,0,0,0.5)",
    expected: { r: 255, g: 0, b: 0, a: 0.5 },
    typeInput: "rgba",
    typeOutput: "HexDecimalObject",
  },
  {
    name: "should throw error for invalid RGB string",
    input: "rgb(255, 255, 255, 1)",
    expectedError: "Invalid color format",
    typeInput: "rgb",
    typeOutput: "Error",
  },
  {
    name: "should throw error for invalid RGBA string",
    input: "rgba(255, 255, 255)",
    expectedError: "Invalid color format",
    typeInput: "rgba",
    typeOutput: "Error",
  },
  {
    name: "should throw error for completely invalid string",
    input: "invalid string",
    expectedError: "Invalid color format",
    typeInput: "invalid",
    typeOutput: "Error",
  },
  ...uniqueHexColors.map((color) => ({
    name: `should return parsed RGB object for hex color ${color}`,
    input: color,
    expected: true,
    typeInput: "hex" as ColorInputType,
    typeOutput: "boolean" as ColorOutputType,
  })),
  ...generateRgbTestCases(),
  ...generateRgbaTestCases(),
];
