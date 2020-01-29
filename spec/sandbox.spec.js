import url from "../data";

describe("Sandbox", () => {
  beforeAll(() => {
    browser.url(url);
  });

  it("should be on Sandbox", () => {
    const title = browser.getTitle();
    const header = $("h1");

    expect(title).toEqual("Sandbox");
    expect(header.getText()).toEqual("Sandbox");
  });
});
