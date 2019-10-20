//Prepare test
const starkString = require("./../src");

test("should convert to Zero-width non-joiner correction", () => {
  expect(
    starkString("آمده ای ولی من رفته ام و می آییم")
      .halfSpace()
      .toString(),
  ).toBe("آمده‌ای ولی من رفته‌ام و می‌آییم");
});
