import { expect } from "chai";

describe("Router test", () => {
    it("Test for historyAPI", () => {
      window.history.pushState({}, "", "/");
      window.history.pushState({}, "", "/sign-up");
      expect(window.history.length).equal(3);
    });
});
