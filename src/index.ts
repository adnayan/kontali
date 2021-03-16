import { Application } from "./classes/Application";

const main = async () => {
  let application: Application = new Application();
  await application.getGameList();
  console.log(application.table);
};

main();
