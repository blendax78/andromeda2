JSON_DATA_DIR = 'app/js/data/'
MOB_DATA_FILE = 'MobData.js'

import json

read_data = ''
save = False
with open(JSON_DATA_DIR + MOB_DATA_FILE) as f:
  for line in f:
    line = line.replace('`','"').replace('\'','"')
    read_data += line.replace(line[0:line.find(':'):].strip(),'"%s"' % line[0:line.find(':'):].strip()) if ':' in line else line
f.closed

read_data = read_data[read_data.find('['):read_data.find('];') + 1:]
mob_data = json.loads(read_data);
print(mob_data[0])