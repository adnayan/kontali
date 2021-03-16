import { expect } from "chai";

import { Scraper } from "../../src/classes/Scraper";

describe("Testing class Scraper.", () => {
  let scrapter: Scraper;
  beforeEach(() => {
    const url: string = "https://www.nifs.no/kamper.php?land=1&t=5&u=682936";
    scrapter = new Scraper(url);
  });

  it("Should return a value of type string.", () => {
    expect(scrapter.url).to.be.a("string");
  });

  it("Should return url equals 'https://www.nifs.no/kamper.php?land=1&t=5&u=682936'", () => {
    expect(scrapter.url).to.equal(
      "https://www.nifs.no/kamper.php?land=1&t=5&u=682936"
    );
  });

  it("Should return an array of type IGame.", () => {
    expect(scrapter.games).to.be.an("object");
  });

  it("Should return an promise of array of type IGame", async () => {
    await expect(scrapter.scrap()).to.be.a("promise");
  });
});
