import { Application } from "./classes/Application";

const main = async () => {
  let application: Application = new Application();
  await application.getGameList();
  application.generateTable();
  application.generateTableHalfTime();
  application.displayTable();
  application.displayHalfTable();
};

main();
