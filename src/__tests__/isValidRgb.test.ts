import { isValidRgb } from "../isValidRgb";
import {
  ColorInputType,
  ColorOutputType,
  ColorTestCase,
} from "./colorTestCases.test";
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

describe("isValidRgb", () => {
  // Get RGB test cases
  const rgbInputTypes: ColorInputType[] = ["rgb"];
  const rgbOutputTypes: ColorOutputType[] = ["boolean"]; // Adjust based on the expected output type
  const rgbTestCases = getTestCasesByType(rgbInputTypes, rgbOutputTypes);

  describe("Valid RGB Tests", () => {
    runTests(isValidRgb, rgbTestCases);
  });
});
