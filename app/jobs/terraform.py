JSON_DATA_DIR = '../app/js/data/'
MOB_DATA_FILE = 'MobData.js'
ZONE_DATA_FILE = 'ZoneData.js'
DECORATION_DATA_FILE = 'DecorationData.js'

import json
from libs import generate_planet_name

def load_data(filename):
  read_data = ''

  with open(filename) as f:
    count = 0
    for line in f:
      line = line.replace('Config.ACTIONS.', '\'').replace(',', '\',') if 'skill:' in line else line
      line = line.replace('`','"').replace('\'','"')

      read_data += line.replace(line[0:line.find(':'):].strip(),'"%s"' % line[0:line.find(':'):].strip()) if ':' in line else line
      count += 1
  f.closed

  read_data = read_data[read_data.find('['):read_data.find('];') + 1:]
  try:
    return json.loads(read_data);
  except (NameError,ValueError) as e:
    print('ERROR: %s' % e)    


mob_data = load_data(JSON_DATA_DIR + MOB_DATA_FILE)
zone_data = load_data(JSON_DATA_DIR + ZONE_DATA_FILE)
decoration_data = load_data(JSON_DATA_DIR + DECORATION_DATA_FILE)

print('****%s****' % generate_planet_name())
print(mob_data[0])
print(zone_data[1])
print(decoration_data[1])