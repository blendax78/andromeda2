class Loader(object):

  def __init__(self, data={}, empty=False):
    for key in data:
      if isinstance(data[key], str):
        setattr(self, key, '' if empty else data[key])
      elif isinstance(data[key], list):
        setattr(self, key, [] if empty else data[key])
      elif isinstance(data[key], dict):
        setattr(self, key, {} if empty else data[key])
      elif isinstance(data[key], int) or isinstance(data[key], float):
        setattr(self, key, None if empty else data[key])
      else:
        setattr(self, key, None if empty else data[key])
