import { Scraper } from "../src/classes/Scraper";
import { Game } from "./classes/Game";

const main = async () => {
  let scrapper: Scraper = new Scraper(
    "https://www.nifs.no/kamper.php?land=1&t=5&u=682936"
  );
  let games: Game = await scrapper.scrap();
};

main();
