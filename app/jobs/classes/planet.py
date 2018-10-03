import random

from classes.loader import Loader
from libs import generate_planet_name, generate_dungeon_name, generate_dungeon_description

class Planet(Loader):
  def generate(self, id, zone_max, space, difficulty_max):
    self.id = id + 1
    self.name = generate_planet_name()
    self.height = random.randint(100,5000)
    self.width = random.randint(100,5000)
    self.defaultZone = random.randint(1, zone_max)
    self.planetX = random.randint(0, space.height)
    self.planetY = random.randint(0, space.width)
    self.towns = []
    self.zones =[]
    self.difficulty = self.get_difficulty(difficulty_max)
    self.dungeons = self.get_dungeons(self.difficulty, difficulty_max, self.height, self.width)

    print(self.__dict__)


  def get_difficulty(self, max):
    rand = random.randint(1,100)
    if rand <= 75:
      return random.randint(0, round(max / 2))
    else:
      return random.randint(round(max / 2), max)

  def get_dungeons(self, planet_diff, max, height, width):
    dungeons = []
    coords_x = []
    coords_y = []

    for d in range(random.randint(0, 100)):
      x = random.randint(0, width)
      y = random.randint(0, height)

      while x in coords_x:
        x = random.randint(0, width)

      coords_x.append(x)

      while y in coords_y:
        y = random.randint(0, height)

      coords_y.append(y)

      dungeons.append({
        'difficultyMin': planet_diff - 2 if planet_diff >= 2 else 0,
        'difficultyMax': planet_diff + 1 if planet_diff < max else max,
        'depth': random.randint(10, 5000),
        'mobChance': random.randint(0,100),
        'x': x,
        'y': y,
        'name': generate_dungeon_name(),
        'description': generate_dungeon_description()
      })

    return dungeons
