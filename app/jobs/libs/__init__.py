from libs.planet_name_generator import generate_planet_name
from libs.town_name_generator import generate_town_name
from libs.town_desc_generator import generate_town_description
from libs.dungeon_text_generator import *
from libs.json_loader import load_js_data

JSON_DATA_DIR = '../app/js/data/'
MOB_DATA_FILE = 'MobData.js'
ZONE_DATA_FILE = 'ZoneData.js'
DECORATION_DATA_FILE = 'DecorationData.js'
TOWN_DATA_FILE = 'TownData.js'
STORE_DATA_FILE = 'StoreData.js'
PLANET_DATA_FILE = 'PlanetData.js'
STATIC_DIR = 'static/data'

mob_data = load_js_data(JSON_DATA_DIR + MOB_DATA_FILE)
zone_data = load_js_data(JSON_DATA_DIR + ZONE_DATA_FILE)
decoration_data = load_js_data(JSON_DATA_DIR + DECORATION_DATA_FILE)
town_data = load_js_data(JSON_DATA_DIR + TOWN_DATA_FILE)
store_data = load_js_data(JSON_DATA_DIR + STORE_DATA_FILE)
planet_data = load_js_data(JSON_DATA_DIR + PLANET_DATA_FILE)
