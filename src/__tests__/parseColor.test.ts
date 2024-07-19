import { parseColor } from "../parseColor";
import { ColorTestCase } from "./colorTestCases.test";
import { getTestCasesByType } from "./colorTestCasesFunctions.test";

const runTests = (func: (color: string) => any, testCases: ColorTestCase[]) => {
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

describe("parseColor", () => {
  const hexTestCases = getTestCasesByType(["hex"], ["HexDecimalObject"]);
  const rgbTestCases = getTestCasesByType(["rgb"], ["HexDecimalObject"]);
  const rgbaTestCases = getTestCasesByType(["rgba"], ["HexDecimalObject"]);
  const invalidTestCases = getTestCasesByType(["invalid"], ["Error"]);

  describe("Hex Tests", () => {
    runTests(parseColor, hexTestCases);
  });

  describe("RGB Tests", () => {
    runTests(parseColor, rgbTestCases);
  });

  describe("RGBA Tests", () => {
    runTests(parseColor, rgbaTestCases);
  });

  describe("Invalid Tests", () => {
    runTests(parseColor, invalidTestCases);
  });
});
