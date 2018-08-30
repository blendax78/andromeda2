import json

def load_js_data(filename):
  read_data = ''

  with open(filename) as f:
    count = 0
    for line in f:
      line = line.replace('Config.ACTIONS.', '\'').replace(',', '\',') if 'skill:' in line else line
      line = line.replace("\"","\\\"").replace('`','"').replace('\'','"')

      read_data += line.replace(line[0:line.find(':'):].strip(),'"%s"' % line[0:line.find(':'):].strip(), 1) if ':' in line else line
      count += 1
  f.closed

  read_data = read_data[read_data.find('['):read_data.find('];') + 1:]
  try:
    return json.loads(read_data);
  except (NameError,ValueError) as e:
    print('ERROR: %s' % e)
    i = 1
    for l in read_data.split("\n"):
      print("%i:%s" % (i, l))
      i += 1