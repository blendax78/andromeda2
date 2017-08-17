// need to define oceans (zones -> landscape %)
// Zone Info:
// id: ID of zone in ZoneData. Do not add defaultZone to zones.
// zoneMinX/zoneMinY: minimum X/Y before a zone can start appearing.
// zoneMaxX/zoneMaxY: minimum X/Y before a zone can start appearing.
export const PlanetData = [
  {
    id: 1,
    name: 'Alpha Centauri b',
    height: 2000,
    width: 2000,
    planetX: 0,
    planetY: 0,
    zones: [
      {
        id: 2,
        zoneMinX: 10,
        zoneMinY: 10,
        zoneMaxX: 110,
        zoneMaxY: 110
      },
      {
        id: 3,
        zoneMinX: 111,
        zoneMinY: 111,
        zoneMaxX: 250,
        zoneMaxY: 250
      }
    ],
    defaultZone: 1
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
    defaultZone: 5
  }
];
