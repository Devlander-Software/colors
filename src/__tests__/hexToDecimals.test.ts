import { hexesToDecimals, hexToDecimal } from "../hexToDecimals";
import { ColorTestCase } from "./colorTestCases.test";
import { getTestCasesByType } from "./colorTestCasesFunctions.test";

const runTests = (func: (input: any) => any, testCases: ColorTestCase[]) => {
  testCases.forEach((testCase) => {
    if (testCase.expectedError) {
      test(testCase.name, () => {
        expect(() => func(testCase.input)).toThrow(testCase.expectedError);
      });
    } else {
      test(testCase.name, () => {
        const result = func(testCase.input);
        expect(result).toEqual(testCase.expected);
      });
    }
  });
};

describe("hexToDecimal", () => {
  test("converts hex to decimal", () => {
    expect(hexToDecimal("ff")).toBe(255);
    expect(hexToDecimal("0a")).toBe(10);
    expect(hexToDecimal("00")).toBe(0);
    expect(hexToDecimal("80")).toBe(128);
  });
});

describe("hexesToDecimals", () => {
  const hexTestCases = getTestCasesByType(["hex"], ["HexDecimalObject"]);

  describe("Hex to Decimals Tests", () => {
    runTests(hexesToDecimals, hexTestCases);
  });
});
