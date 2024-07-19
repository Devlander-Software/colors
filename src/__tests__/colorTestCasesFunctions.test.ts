import {
  ColorInputType,
  ColorOutputType,
  ColorTestCase,
  colorTestCases,
} from "./colorTestCases.test";

export const getTestCasesByType = (
  inputTypes: ColorInputType[],
  outputTypes: ColorOutputType[],
): ColorTestCase[] => {
  return colorTestCases.filter(
    (testCase) =>
      inputTypes.includes(testCase.typeInput) &&
      outputTypes.includes(testCase.typeOutput),
  );
};

export const getTestCasesByInputType = (
  inputTypes: ColorInputType[],
): ColorTestCase[] => {
  return colorTestCases.filter((testCase) =>
    inputTypes.includes(testCase.typeInput),
  );
};

export const getTestCasesByOutputType = (
  outputTypes: ColorOutputType[],
): ColorTestCase[] => {
  return colorTestCases.filter((testCase) =>
    outputTypes.includes(testCase.typeOutput),
  );
};

// Tests for the getTestCasesByType, getTestCasesByInputType, getTestCasesByOutputType functions
describe("getTestCasesByType", () => {
  test("should return test cases for specified input and output types", () => {
    const inputTypes: ColorInputType[] = ["hex"];
    const outputTypes: ColorOutputType[] = ["boolean"];
    const expected: ColorTestCase[] = colorTestCases.filter(
      (testCase) =>
        inputTypes.includes(testCase.typeInput) &&
        outputTypes.includes(testCase.typeOutput),
    );

    const result = getTestCasesByType(inputTypes, outputTypes);
    expect(result).toEqual(expected);
  });

  test("should return empty array if no match found", () => {
    const inputTypes: ColorInputType[] = ["invalid"];
    const outputTypes: ColorOutputType[] = ["HexDecimalObject"];
    const expected: ColorTestCase[] = [];

    const result = getTestCasesByType(inputTypes, outputTypes);
    expect(result).toEqual(expected);
  });
});

describe("getTestCasesByInputType", () => {
  test("should return test cases for specified input types", () => {
    const inputTypes: ColorInputType[] = ["hex"];
    const expected: ColorTestCase[] = colorTestCases.filter((testCase) =>
      inputTypes.includes(testCase.typeInput),
    );

    const result = getTestCasesByInputType(inputTypes);
    expect(result).toEqual(expected);
  });

  test("should return empty array if no match found", () => {
    const inputTypes: ColorInputType[] = ["nonexistent" as any];
    const expected: ColorTestCase[] = [];

    const result = getTestCasesByInputType(inputTypes);
    expect(result).toEqual(expected);
  });
});

describe("getTestCasesByOutputType", () => {
  test("should return test cases for specified output types", () => {
    const outputTypes: ColorOutputType[] = ["boolean"];
    const expected: ColorTestCase[] = colorTestCases.filter((testCase) =>
      outputTypes.includes(testCase.typeOutput),
    );

    const result = getTestCasesByOutputType(outputTypes);
    expect(result).toEqual(expected);
  });

  test("should return empty array if no match found", () => {
    const outputTypes: ColorOutputType[] = ["nonexistent" as any];
    const expected: ColorTestCase[] = [];

    const result = getTestCasesByOutputType(outputTypes);
    expect(result).toEqual(expected);
  });
});
