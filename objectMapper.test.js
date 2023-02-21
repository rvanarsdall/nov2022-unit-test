const studentData = require("./data");
import { expect, it } from "vitest";
import { expectedResult } from "./dataExample";
import { objectMapper } from "./objectMapper";

it("should correctly format the data", () => {
  const result = objectMapper(studentData);
  expect(result).toStrictEqual(expectedResult);
});
