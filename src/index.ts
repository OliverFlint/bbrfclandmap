import showBanner from "node-banner";
import yargs from "yargs/yargs";

(async () => {
  await showBanner("Google Map grid calculator");

  const args = yargs(process.argv.slice(2)).options({
    sw: { type: "string", demandOption: true, alias: "southwest" },
    ne: { type: "string", demandOption: true, alias: "northeast" },
  });
  const argv = await args.argv;
  let swCorOrds: { lng: number; lat: number } = { lng: 0, lat: 0 };
  let neCorOrds: { lng: number; lat: number } = { lng: 0, lat: 0 };
  const swGroups = argv.sw.matchAll(/^([0-9\.]*)\,([0-9\.]*)$/gm).next();
  swCorOrds = { lng: swGroups.value[1], lat: swGroups.value[2] };
  console.log(`South West ${JSON.stringify(swCorOrds)}`);
  const neGroups = argv.ne.matchAll(/^([0-9\.]*)\,([0-9\.]*)$/gm).next();
  neCorOrds = { lng: neGroups.value[1], lat: neGroups.value[2] };
  console.log(`North East ${JSON.stringify(neCorOrds)}`);

  // todo: calculate se & nw coords

  // todo: calculate rows & columns

  // todo: calculate rows/columns min & max

  // todo: calculate rectangles within coords and min/max
})();
