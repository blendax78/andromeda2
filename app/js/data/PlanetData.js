// need to define oceans (zones -> landscape %)
// Zone Info:
// id: ID of zone in ZoneData. Do not add defaultZone to zones.
// zoneMinX/zoneMinY: minimum X/Y before a zone can start appearing.
// zoneMaxX/zoneMaxY: minimum X/Y before a zone can start appearing.
export const PlanetData = [
  {
    id: 0,
    name: 'Space',
    height: 50000,
    width: 50000,
    zones: [],
    defaultZone: 0
  },
  {
    id: 1,
    name: 'Trammel',
    height: 2000,
    width: 2000,
    planetX: 0,
    planetY: 0,
    towns: [
      {
        id: 1,
        x: 0,
        y: 0
      },
      {
        id: 2,
        x: 200,
        y: 500
      },
    ],
    zones: [
      {
        id: 2,
        zoneMinX: 0,
        zoneMinY: 25,
        zoneMaxX: 2000,
        zoneMaxY: 100
      },
      {
        id: 2,
        zoneMinX: 25,
        zoneMinY: 0,
        zoneMaxX: 2000,
        zoneMaxY: 24
      },
      {
        id: 3,
        zoneMinX: 0,
        zoneMinY: 100,
        zoneMaxX: 2000,
        zoneMaxY: 1000
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
