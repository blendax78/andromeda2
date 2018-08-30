class Loader(object):

  def __init__(self, data):
    self.template = {}

    for key in data:
      self.template[key] = data[key]

      if isinstance(data[key], str):
        setattr(self, key, '')
      elif isinstance(data[key], list):
        setattr(self, key, [])
      elif isinstance(data[key], dict):
        setattr(self, key, {})
      elif isinstance(data[key], bool):
        setattr(self, key, None)
      else:
        setattr(self, key, None)
