# JSON_DATA_DIR = '../app/js/data/'
# MOB_DATA_FILE = 'MobData.js'
# ZONE_DATA_FILE = 'ZoneData.js'
# DECORATION_DATA_FILE = 'DecorationData.js'
# TOWN_DATA_FILE = 'TownData.js'
# STORE_DATA_FILE = 'StoreData.js'
# PLANET_DATA_FILE = 'PlanetData.js'
# STATIC_DIR = 'static/data'

import os
import json
from json.decoder import JSONDecodeError

# from libs import load_js_data
from classes import *

# mob_data = load_js_data(JSON_DATA_DIR + MOB_DATA_FILE)
# zone_data = load_js_data(JSON_DATA_DIR + ZONE_DATA_FILE)
# decoration_data = load_js_data(JSON_DATA_DIR + DECORATION_DATA_FILE)
# town_data = load_js_data(JSON_DATA_DIR + TOWN_DATA_FILE)
# store_data = load_js_data(JSON_DATA_DIR + STORE_DATA_FILE)
# planet_data = load_js_data(JSON_DATA_DIR + PLANET_DATA_FILE)

from libs import mob_data, planet_data, zone_data, STATIC_DIR

def main():
  planet_coords = {}
  terraform_data = []

  terraform_planet_id = 0
  maual_planet_id = 0

  for planet in planet_data:
    maual_planet_id = planet['id']
    if 'planetX' not in planet:
      continue

    if planet['planetX'] not in planet_coords:
      planet_coords[planet['planetX']] = {}

    planet_coords[planet['planetX']][planet['planetY']] = True

  for fn in sorted(os.listdir(STATIC_DIR + '/planets')):
    if '.json' in fn.lower():
      try:
        with open('%s/planets/%s' % (STATIC_DIR, fn)) as f:
          planet = json.load(f)
          terraform_planet_id = planet['id']

          if planet['planetX'] not in planet_coords:
            planet_coords[planet['planetX']] = {}

          planet_coords[planet['planetX']][planet['planetY']] = True
      except (FileNotFoundError, JSONDecodeError) as e:
        continue

  planet = Planet()
  space = Planet(planet_data[0])

  difficulty = max([mob['difficulty'] for mob in mob_data if 'difficulty' in mob])
  last_id = maual_planet_id if maual_planet_id > terraform_planet_id else terraform_planet_id
  new_planet = planet.generate(last_id, zone_data[-1]['id'], space, planet_coords, difficulty)

  try:
    with open(STATIC_DIR + '/planets/%i.json' % new_planet.id, 'w') as f:
      f.write(json.dumps(new_planet.__dict__))

    print('NEW PLANET GENERATED: %s' % new_planet.name)
  except (FileNotFoundError, JSONDecodeError) as e:
    print('ERROR when generating new planet: %s' % new_planet.name)


# TODO:
# Generate monsters & legendary monsters
# towns
# zones?

if __name__ == '__main__':
    main()
