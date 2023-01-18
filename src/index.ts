import showBanner from "node-banner";
import yargs from "yargs/yargs";

(async () => {
  await showBanner("Google Map grid calculator");

  const args = yargs(process.argv.slice(2)).options({
    sw: { type: "string", demandOption: true, alias: "southwest" },
    ne: { type: "string", demandOption: true, alias: "northeast" },
  });
  const argv = await args.argv;
  console.log(argv.sw);
})();
