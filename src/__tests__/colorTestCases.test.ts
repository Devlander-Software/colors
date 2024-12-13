import { HexDecimalObject } from "../types/rgb.type";

export type ColorInputType = "hex" | "rgb" | "rgba" | "invalid";
export type ColorOutputType = "HexDecimalObject" | "Error" | "boolean";

export const colorTestResults = {
  passed: {
    hex: [
      "#F7F7F7",
      "#D32F2F",
      "#FFFFFF",
      "#FF5722",
      "#007BFF",
      "#6C757D",
      "#E57373",
      "#81C784",
      "#64B5F6",
      "#FFD54F",
      "#BA68C8",
      "#66AFFF",
      "#FAFAFA",
      "#E0E0E0",
      "#757575",
      "#FFC107",
      "#FFECB3",
      "#F2F2F2",
      "#F5F5F5",
      "#D5D5D5",
      "#43A047",
      "#A8A8A8",
      "#F5F5F5",
      "#D9D9D9",
      "#34FFFF",
      "#EBFFFF",
      "#D6FFFF",
      "#C2FFFF",
      "#AEFFFF",
      "#9AFFFF",
      "#85FFFF",
      "#71FFFF",
      "#48FFFF",
      "#343333",
      "#EBEBEB",
      "#D6D6D6",
      "#C2C2C2",
      "#AEADAD",
      "#9A9999",
      "#858585",
      "#717070",
      "#484747",
      "#FFFFFF",
      "#262626",
      "#0055AA",
      "#333333",
      "#E57373",
      "#FFA000",
    ],
    rgb: [],
  },
  failed: {
    rgb: [
      "rgb(247, 247, 247)",
      "rgb(211, 47, 47)",
      "rgb(255, 255, 255)",
      "rgb(255, 87, 34)",
      "rgb(0, 123, 255)",
      "rgb(108, 117, 125)",
      "rgb(229, 115, 115)",
      "rgb(129, 199, 132)",
      "rgb(100, 181, 246)",
      "rgb(255, 213, 79)",
      "rgb(186, 104, 200)",
      "rgb(102, 175, 255)",
      "rgb(250, 250, 250)",
      "rgb(33, 33, 33)",
      "rgb(224, 224, 224)",
      "rgb(117, 117, 117)",
      "rgb(189, 189, 189)",
      "rgb(51, 51, 51)",
      "rgb(213, 213, 213)",
      "rgb(245, 245, 245)",
      "rgb(72, 71, 71)",
      "rgb(113, 112, 112)",
    ],
    rgba: [
      "rgba(0, 0, 0, 0.15)",
      "rgba(255, 193, 7, 0.5)",
      "rgba(255, 193, 7, 0.8)",
      "rgba(255, 165, 0, 0.22)",
      "rgba(255, 165, 0, 0.62)",
      "rgba(229, 115, 115, 0.1)",
      "rgba(229, 115, 115, 0.4)",
      "rgba(0, 0, 0, 0.15)",
    ],
  },
};
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
  ...colorTestResults.passed.hex,
];

// Valid RGB strings test cases
const validRgbStrings = [
  "rgb(255, 0, 128)",
  "rgb(0, 128, 255)",
  "rgb(100, 100, 100)",
  "rgb(255, 255, 255)",
  ...colorTestResults.failed.rgb,
];

// Valid RGBA strings test cases
const validRgbaStrings = [
  "rgba(255, 0, 128, 0.5)",
  "rgba(0, 128, 255, 0.5)",
  "rgba(100, 100, 100, 0.5)",
  "rgba(0,0,0,0.5)",
  "rgba(255, 255, 255, 0.5)",
  ...colorTestResults.failed.rgba,
];

// Generate RGB test cases
const generateRgbTestCases = (): ColorTestCase[] => {
  const cases: ColorTestCase[] = [
   
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
    name: "should return parsed RGB object for valid rgb color",
    input: "rgb(255, 0, 0)",
    expected: { r: 255, g: 0, b: 0 },
    typeInput: "rgb",
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
if (process.env.NODE_ENV === "test") {
  describe("Color Test Definitions", () => {
    test("colorTestCases should be defined", () => {
      expect(colorTestCases).toBeDefined();
    });

    test("uniqueHexColors should be defined", () => {
      expect(uniqueHexColors).toBeDefined();
    });

    test("validRgbStrings should be defined", () => {
      expect(validRgbStrings).toBeDefined();
    });

    test("validRgbaStrings should be defined", () => {
      expect(validRgbaStrings).toBeDefined();
    });

    test("generateRgbTestCases should be defined", () => {
      expect(generateRgbTestCases).toBeDefined();
    });

    test("generateRgbaTestCases should be defined", () => {
      expect(generateRgbaTestCases).toBeDefined();
    });
  });
}