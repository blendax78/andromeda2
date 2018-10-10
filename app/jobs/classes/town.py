from classes.loader import Loader
from libs import generate_town_name

class Town(Loader):
  def generate(self, id, x, y, teleporter=False):
    self.id = id + 1
    self.name = generate_town_name()
    self.description = ''
    self.x = x
    self.y = y
    self.stores = self.get_stores(teleporter)
    self.mobs =[]
    return self

  def get_stores(self, teleporter=False):
    stores = []
    if teleporter is True:
      stores.append({ "id": 0 })

    return stores

