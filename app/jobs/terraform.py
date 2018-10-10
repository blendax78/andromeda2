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

from classes import *
from libs import mob_data, planet_data, zone_data, town_data, STATIC_DIR

def main():
  planet_coords = {}
  terraform_data = []

  terraform_planet_id = 0
  manual_planet_id = 0
  terraform_town_id = 0
  manual_town_id = 0 

  for town in town_data:
    manual_town_id = town['id']

  for fn in sorted(os.listdir(STATIC_DIR + '/towns')):
    if '.json' in fn.lower():
      try:
        with open('%s/towns/%s' % (STATIC_DIR, fn)) as f:
          town = json.load(f)
          terraform_town_id = town['id']
      except (FileNotFoundError, JSONDecodeError) as e:
        continue

  for planet in planet_data:
    manual_planet_id = planet['id']
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
  last_planet_id = manual_planet_id if manual_planet_id > terraform_planet_id else terraform_planet_id
  last_town_id = manual_town_id if manual_town_id > terraform_town_id else terraform_town_id
  new_planet = planet.generate(last_planet_id, last_town_id, zone_data[-1]['id'], space, planet_coords, difficulty)

  try:
    with open(STATIC_DIR + '/planets/%i.json' % new_planet.id, 'w') as f:
      f.write(json.dumps(new_planet.__dict__))

    print('NEW PLANET GENERATED: %s' % new_planet.name)
  except (FileNotFoundError, JSONDecodeError) as e:
    print('ERROR when generating new planet: %s' % new_planet.name)


# TODO:
# Generate monsters & legendary monsters 
# towns

if __name__ == '__main__':
    main()
