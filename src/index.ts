import showBanner from "node-banner";
import yargs from "yargs/yargs";

(async () => {
  await showBanner("Google Map grid calculator");

  const args = yargs(process.argv.slice(2)).options({
    sw: { type: "string", demandOption: true, alias: "southwest" },
    ne: { type: "string", demandOption: true, alias: "northeast" },
  });
  const argv = await args.argv;
  let swCoOrds: { lat: number; lng: number } = { lng: 0, lat: 0 };
  let neCoOrds: { lat: number; lng: number } = { lng: 0, lat: 0 };
  const swGroups = argv.sw.matchAll(/^([0-9\.]*)\,([0-9\.]*)$/gm).next();
  swCoOrds = { lat: swGroups.value[1], lng: swGroups.value[2] };
  console.log(`South West ${JSON.stringify(swCoOrds)}`);
  const neGroups = argv.ne.matchAll(/^([0-9\.]*)\,([0-9\.]*)$/gm).next();
  neCoOrds = { lat: neGroups.value[1], lng: neGroups.value[2] };
  console.log(`North East ${JSON.stringify(neCoOrds)}`);

  // todo: calculate se & nw coords
  const seCoOrds = { lat: swCoOrds.lat, lng: neCoOrds.lng };
  console.log(`South East ${JSON.stringify(seCoOrds)}`);
  const nwCoOrds = { lat: neCoOrds.lat, lng: swCoOrds.lng };
  console.log(`North West ${JSON.stringify(nwCoOrds)}`);

  // todo: calculate rows & columns

  // todo: calculate rows/columns min & max

  // todo: calculate rectangles within coords and min/max
})();
