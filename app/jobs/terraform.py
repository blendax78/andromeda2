JSON_DATA_DIR = '../app/js/data/'
MOB_DATA_FILE = 'MobData.js'
ZONE_DATA_FILE = 'ZoneData.js'
DECORATION_DATA_FILE = 'DecorationData.js'
TOWN_DATA_FILE = 'TownData.js'
STORE_DATA_FILE = 'StoreData.js'
PLANET_DATA_FILE = 'PlanetData.js'
STATIC_DIR = 'static/data'

import json

from libs import load_js_data
from classes import *

mob_data = load_js_data(JSON_DATA_DIR + MOB_DATA_FILE)
zone_data = load_js_data(JSON_DATA_DIR + ZONE_DATA_FILE)
decoration_data = load_js_data(JSON_DATA_DIR + DECORATION_DATA_FILE)
town_data = load_js_data(JSON_DATA_DIR + TOWN_DATA_FILE)
store_data = load_js_data(JSON_DATA_DIR + STORE_DATA_FILE)
planet_data = load_js_data(JSON_DATA_DIR + PLANET_DATA_FILE)

planet = Planet()
space = Planet(planet_data[0])
difficulty = max([mob['difficulty'] for mob in mob_data if 'difficulty' in mob])

planet.generate(planet_data[-1]['id'], zone_data[-1]['id'], space, difficulty)

f = open(STATIC_DIR + '/planets/%i.json' % planet.id, 'w')
f.write(json.dumps(planet.__dict__))
f.close()

# print('****%s****' % generate_planet_name())
# print(mob_data[0])
# print(zone_data[1])
# print(decoration_data[1])
# print(town_data[1])
# print(zone_data[1])
