import { expect } from "chai";
import { Application } from "../../src/classes/Application";

describe("Testing class Application.", () => {
  let app: Application;

  beforeEach(() => {
    app = new Application();
  });

  it("Should return the value of fileName, that is an empty string.", () => {
    expect(app.fileName).to.equal("");
  });
});
