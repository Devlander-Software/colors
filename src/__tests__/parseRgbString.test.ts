import { parseRgbString } from "../parseRgbString";
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

describe("parseRgbString", () => {
  const rgbTestCases = getTestCasesByType(["rgb"], ["HexDecimalObject"]);
  const rgbaTestCases = getTestCasesByType(["rgba"], ["HexDecimalObject"]);

  describe("RGB Tests", () => {
    runTests(parseRgbString, rgbTestCases);
  });

  describe("RGBA Tests", () => {
    runTests(parseRgbString, rgbaTestCases);
  });
});
