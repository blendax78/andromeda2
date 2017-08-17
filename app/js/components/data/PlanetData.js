// need to define oceans (zones -> landscape %)
// Zone Info:
// id: ID of zone in ZoneData. Do not add defaultZone to zones.
// chanceMin/chanceMax: Start and Stop values for the chance of having a zone (out of 100). Cannot overlap with other zones.
// zoneMinX/zoneMinY: minimum X/Y before a zone can start appearing.
export const PlanetData = [
    {
      id: 1,
      name: 'Alpha Centauri b',
      height: 2000,
      width: 2000,
      planetX: 0,
      planetY: 0,
      landscapes: [1],
      zones: [
        {
          id: 2,
          chanceMin: 0,
          chanceMax: 25,
          zoneMinX: 10,
          zoneMinY: 10,
          landscape: 1
        }
      ],
      defaultZone: {
        id: 1,
        landscape: 1
      }
    },
    {
      id: 2,
      name: 'Arrakis',
      height: 1200,
      width: 1200,
      planetX: 25,
      planetY: 38,
      landscapes: [2],
      zones: [
      ],
      defaultZone: {
        id: 2,
        landscape: 2
      }
    }
  ];
